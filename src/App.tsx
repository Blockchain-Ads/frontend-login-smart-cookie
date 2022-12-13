import React, { useEffect, useState } from "react";
import "./App.css";
import Web3Modal from "web3modal";
import { providerOptions } from "./config/providerOptions";
import { ethers } from "ethers";
import { networkOptions } from "./config/networkOptions";
import { ConnectWalletButton } from "./components/ConnectButton";
import { DisconnectWalletButton } from "./components/DisconnectButton";

import { NumberInput } from "./components/NumberInput";
import { CurrencyDisplay } from "./components/CurrencyDisplay";
import { SignupButton } from "./components/SignupButton";
import { StakeButton } from "./components/StakeButton";
import { UnstakeButton } from "./components/UnstakeButton";
import contractABI from "./contractABI.json";

// Move to environment variables
const DEFAULT_CHAIN_ID = 80001;
const CONTRACT_ADDRESS = "0xab36De564F423AEAC34EBA83F4F86fea3a245950";

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

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
  const [isSignUp, setIsSignUp]: [
    IsSignUp,
    React.Dispatch<React.SetStateAction<IsSignUp>>
  ] = useState(false);

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
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI,
      ethersProvider?.getSigner()
    );
    const accounts = await ethersProvider?.listAccounts();
    if (accounts?.[0] == undefined) {
      // inform this error to user in UI
      console.error("Account not found");
    } else {
      // console.log(await contract.owner());
      // const tx = await contract.signUp();
      // console.log(tx);
      // // TODO UI ait effect
      // const receipt = await tx.wait();
      // console.log(receipt);
      // setIsSignUp(true);
      // TODO get from logboom instead
    }
    // TODO event listener
  };

  useEffect(() => {
    executeSignup();
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
        ) : isSignUp ? (
          <div className="p-12 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Wallet connected
            </label>
            <SignupButton signup={executeSignup} />
          </div>
        ) : (
          <div className="p-12 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <label className="flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Signed Up
            </label>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
