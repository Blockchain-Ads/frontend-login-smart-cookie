import React, { useEffect, useState } from "react";
import "./App.css";
import Web3Modal from "web3modal";
import { providerOptions } from "./config/providerOptions";
import { ethers } from "ethers";
import { networkOptions } from "./config/networkOptions";
import { ConnectWalletButton } from "./components/ConnectButton";
import { DisconnectWalletButton } from "./components/DisconnectButton";
import { bcaWeb3Connect, StandardResult } from "./api";
import { SignupButton } from "./components/SignupButton";
import ToggleButton from "./components/ToggleButton";
import contractABI from "./contractABI.json";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import jwtDecode, { JwtPayload } from "jwt-decode";
import DeleteAccountButton from "./components/DeleteAccountButton";
import ClaimRewardButton from "./components/ClaimRewardButton";
// Move to environment variables
const DEFAULT_CHAIN_ID = 80001;
const CONTRACT_ADDRESS = "0x00c04C5D45EbB01eC06e7efeD05c50491c00098D";
const STATUS_OK = "OK";
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});
const ERROR_CODE = {
  ADDRESS: 1,
  GENERIC: 2,
  PROMISE_ALL: 3,
  SIGNUP: 4,
};

// TODO add infura api options for non wallet rpc providers connection
//  TODO replace undefined with Result type
type EthersProvider = ethers.providers.Web3Provider | undefined;
type Accounts = Account[];
type Account = string | undefined;
type ChainId = number;
type IsSignUp = boolean;

function App() {
  // NOTE
  // TODO replace any type
  const [rpcProvider, setRpcProvider]: [
    any,
    (value: React.SetStateAction<any>) => void
  ] = useState();
  const [ethersProvider, setEthersProvider]: [
    EthersProvider,
    React.Dispatch<React.SetStateAction<EthersProvider>>
  ] = useState();
  const [account, setAccount]: [
    Account,
    React.Dispatch<React.SetStateAction<Account>>
  ] = useState();
  const [chainId, setChainId]: [
    ChainId,
    React.Dispatch<React.SetStateAction<ChainId>>
  ] = useState(DEFAULT_CHAIN_ID);
  const [error, setError]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [network, setNetwork] = useState("");

  const cookieName = "BCA-universal-cookie";
  const defaultCookieData = "";
  const baseURL = "https://us-central1-web3-cookie.cloudfunctions.net";

  const [signer, setSigner]: [any, React.Dispatch<React.SetStateAction<any>>] =
    useState();

  const [localStorageData, setLocalStorageData] = useState(() => {
    let currentValue; // currently cookie is just a string not an object
    try {
      currentValue = Cookies.get(cookieName) || String(defaultCookieData);
      console.log("CURRENTVALUE", currentValue);
      const decoded = jwt_decode(currentValue);
      console.log("DECODED", decoded);
    } catch (error) {
      console.error(">>>", error);
      currentValue = defaultCookieData;
    }
    return currentValue;
  });

  function checkJwtDecode(token: string): StandardResult {
    try {
      return { result: jwtDecode<JwtPayload>(token), status: STATUS_OK };
    } catch (error) {
      return {
        result: "",
        status: { errorCode: ERROR_CODE.GENERIC, reason: `${error}` },
      };
    }
  }
  const checkCookie = (cookie: any) => {
    const timeNow = Math.floor(Date.now() / 1000); // in seconds
    const oneHour = 60 * 60; // in seconds
    if (cookie) {
      // cookie already exists
      // TODO check expired
      const checkedJwt = checkJwtDecode(cookie);
      console.log("🚀 ~ file: App.tsx:106 ~ checkCookie ~ cookie", cookie);
      if (checkedJwt.status == STATUS_OK) {
        // jwt decoded success
        const cookieDecoded = checkedJwt.result;
        console.log(
          "🚀 ~ file: App.tsx:110 ~ checkCookie ~ cookieDecoded",
          cookieDecoded
        );
        const cookieIsExpired = cookieDecoded.exp + oneHour < timeNow;
        if (!cookieIsExpired) {
          console.log(
            "🚀 ~ file: App.tsx:113 ~ checkCookie ~ cookieIsExpired",
            cookieIsExpired
          );
          // Cookie not expired
          // Do nothing
          return { result: cookie, status: STATUS_OK };
        } else {
          // Cookie has expired
          console.log(
            "🚀 ~ file: App.tsx:119 ~ checkCookie ~ Cookie has expired",
            "Cookie has expired"
          );
          Cookies.remove(cookieName);
          // Continue to create a cookie
        }
      } else {
        // jwt decoded unsuccess
        Cookies.remove(cookieName);
        //   // Continue to create a cookie
      }
    }
  };
  const [isSignUp, setIsSignUp]: [
    IsSignUp,
    React.Dispatch<React.SetStateAction<IsSignUp>>
  ] = useState(checkCookie(localStorageData)?.status == STATUS_OK);
  useEffect(() => {
    const url = baseURL + "/alldata";
    (async () => {
      const localStorageString = localStorageData;

      axios
        .post(url, {
          firebaseToken: localStorageString,
        })
        .then((response) => {})
        .catch(function (error) {
          console.error(" >>> ", error);
        });
    })();
  }, []);

  // TODO
  // const switchNetwork = async () => {
  //   try {
  //     await ethersProvider ?.provider.request ?.({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: toHex(network) }]
  //     });
  //   } catch (switchError: any) {
  //     if (switchError.code === 4902) {
  //       try {
  //         const chain = toHex(network) as keyof typeof networkOptions;
  //         await ethersProvider ?.provider.request ?.({
  //           method: "wallet_addEthereumChain",
  //           params: [networkOptions[chain]]
  //         });
  //       } catch (error) {
  //         setError(error as string);
  //       }
  //     }
  //   }
  // };
  type ConnectWallet = () => Promise<void>;
  const connectWallet: ConnectWallet = async () => {
    try {
      const rpcProvider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(rpcProvider);
      const accounts = await ethersProvider.listAccounts();
      console.log("ACCOUNTS", accounts);
      const network = await ethersProvider.getNetwork();
      console.log("NETWORK", network);
      setRpcProvider(rpcProvider);
      setEthersProvider(ethersProvider);
      setSigner(ethersProvider?.getSigner());
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
      // TODO switch network if not in the correct chain
      console.log("NETWORK.CHAINID", network.chainId);
    } catch (error) {
      setError(error as string);
    }
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  const executeSignup = async () => {
    // Note not gonna create a state for contract util it's being use more than 2 place
    const signerAddress = await signer?.getAddress();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
    if (signerAddress == undefined) {
      // inform this error to user in UI
      console.error("Account not found");
    } else {
      console.log(
        "🚀 ~ file: App.tsx:122 ~ executeSignup ~ await contract.owner()",
        await contract.owner()
      );
      const tx = await contract.signUp();
      console.log("🚀 ~ file: App.tsx:123 ~ executeSignup ~ tx", tx);
      // TODO UI ait effect
      const receipt = await tx.wait();
      console.log("🚀 ~ file: App.tsx:126 ~ executeSignup ~ receipt", receipt);
      const bcaToken = await bcaWeb3Connect(signerAddress);
      console.log(
        "🚀 ~ file: App.tsx:128 ~ executeSignup ~ bcaToken",
        bcaToken
      );
      setIsSignUp(true);

      // TODO get from logboom instead
    }
    // TODO event listener
  };

  useEffect(() => {
    executeSignup();
  }, []);

  const executeToogle = async () => {
    // Note not gonna create a state for contract util it's being use more than 2 place
    const signerAddress = await signer?.getAddress();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
    if (signerAddress == undefined) {
      // inform this error to user in UI
      console.error("Account not found");
    } else {
      const tx = await contract.toggleDataCollection();
      console.log("🚀 ~ file: App.tsx:123 ~ executeSignup ~ tx", tx);
      // TODO UI ait effect
      const receipt = await tx.wait();
      console.log("🚀 ~ file: App.tsx:126 ~ executeSignup ~ receipt", receipt);

      // TODO get from logboom instead
    }
    // TODO event listener
  };

  useEffect(() => {
    executeToogle();
  }, []);

  const executeDeleteData = async () => {
    // Note not gonna create a state for contract util it's being use more than 2 place
    const signerAddress = await signer?.getAddress();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
    if (signerAddress == undefined) {
      // inform this error to user in UI
      console.error("Account not found");
    } else {
      const tx = await contract.deleteUser(signerAddress);
      console.log("🚀 ~ file: App.tsx:123 ~ executeSignup ~ tx", tx);
      // TODO UI ait effect
      const receipt = await tx.wait();
      console.log("🚀 ~ file: App.tsx:126 ~ executeSignup ~ receipt", receipt);

      // TODO get from logboom instead
    }
    // TODO event listener
  };

  useEffect(() => {
    executeDeleteData();
  }, []);

  const executeClaimReward = async () => {
    // Note not gonna create a state for contract util it's being use more than 2 place
    const signerAddress = await signer?.getAddress();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
    if (signerAddress == undefined) {
      // inform this error to user in UI
      console.error("Account not found");
    } else {
      // const tx = await contract.claim();
      // console.log("🚀 ~ file: App.tsx:123 ~ executeSignup ~ tx", tx);
      // // TODO UI ait effect
      // const receipt = await tx.wait();
      // console.log("🚀 ~ file: App.tsx:126 ~ executeSignup ~ receipt", receipt);
      // TODO get from logboom instead
    }
    // TODO event listener
  };

  useEffect(() => {
    executeClaimReward();
  }, []);

  // TODO make it configurable
  const refreshState = () => {
    setAccount("");
    setChainId(1);
    setNetwork("");
    // setMessage("");
    // setSignature("");
    // setVerified(undefined);
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (rpcProvider?.on) {
      // TODO
      // const handleAccountsChanged = (accounts:Accounts) => {
      //   console.log("accountsChanged", accounts);
      //   if (accounts) setAccount(accounts[0]);
      // };
      //
      // TODO
      // const handleChainChanged = (_hexChainId:ChainId) => {
      //   setChainId(_hexChainId);
      // };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };
      // TODO
      // rpcProvider.on("accountsChanged", handleAccountsChanged);
      // rpcProvider.on("chainChanged", handleChainChanged);
      rpcProvider.on("disconnect", handleDisconnect);

      return () => {
        if (rpcProvider.removeListener) {
          // TODO
          // rpcProvider.removeListener("accountsChanged", handleAccountsChanged);
          // rpcProvider.removeListener("chainChanged", handleChainChanged);
          rpcProvider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [rpcProvider]);

  return (
    <div className="App">
      <section>
        {/* TODO move to new component */}
        {!account ? (
          <div className="flex flex-col p-12 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <label className="flex mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Welcome to test app
            </label>
            <label className="flex mb-6 text-sm font-medium text-gray-900 dark:text-gray-300">
              to get started, connect your wallet
            </label>
            <ConnectWalletButton connectWallet={connectWallet} />
          </div>
        ) : !isSignUp ? (
          <div className="p-12 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Wallet connected
            </label>
            <SignupButton signup={executeSignup} />
          </div>
        ) : (
          <div className="p-12 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              You have signed up
            </label>
            <ToggleButton
              executeToggle={executeToogle}
              localStorageData={localStorageData}
            />
            <ClaimRewardButton executeClaimReward={executeClaimReward} />
            <DeleteAccountButton executeDeleteData={executeDeleteData} />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
