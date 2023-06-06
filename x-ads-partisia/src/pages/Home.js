import React from 'react';
import PartisiaSdk from 'partisia-sdk';
import { AbiParser, JsonValueConverter, StateReader } from 'abi-client-ts'
import { partisiaCrypto } from 'partisia-crypto';
import { PartisiaAccount, PartisiaRpc } from 'partisia-rpc';
import { db, storage } from '../firebase';
import { collection, query, where, onSnapshot, addDoc, Timestamp, orderBy } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import serializePulicContract from '../utils/serializePulicContract'
import axios from 'axios';
import { DeviceUUID } from 'device-uuid';

function Home() {
    let sdkClient = new PartisiaSdk();
    let getToggleFromLocalStorge = localStorage.getItem("status");
    const rpcNonce = PartisiaRpc({
        baseURL: 'https://reader.partisiablockchain.com/shards/Shard0',
    })
    const [address, setAddress] = React.useState("");
    const [sdkObject, setSDK] = React.useState();
    const [toggle, setToggle] = React.useState(false);

    const connect = async () => {
        await sdkClient.connect({
            chainId: 'Partisia Blockchain Testnet',
            permissions: ['sign'],
            dappName: 'Partisia Wallet',
        })
        console.log(sdkClient);
        if (sdkClient.connection) {
            setSDK(sdkClient);
            setAddress(sdkClient.connection.account.address);
            let toggleValue = await getToggleValue(sdkClient.connection.account.address);
            await setToggle(toggleValue);
            console.log(toggleValue ,getToggleFromLocalStorge);
            console.log(!toggleValue && !getToggleFromLocalStorge);

            if (toggleValue || !getToggleFromLocalStorge) {
                // console.log("store");
                let ip = "192.168.178";
                let uuid = ""
                try {
                    ip = await axios.get("https://api.ipify.org/?format=json").then(res => {
                        return res.data.ip;
                    })
                    uuid = new DeviceUUID().get();
                } catch (error) {
                    console.log(error)
                }
                let data = {
                    address: sdkClient.connection.account.address,
                    firebaseToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..Bviz1U--0-WqCngLseTmetfSM9Whpm4katgqoSJ4VDyA",
                    hashIp: ip,
                    updateAt: new Date(),
                    uuid: uuid
                };
                // console.log(data);
                await addDoc(collection(db, 'web3-cookie', sdkClient.connection.account.address, 'rust-users'), data);
                await localStorage.setItem("status", true);
            }
        }
    }

    const disconnect = async () => {
        setAddress("")
    }

    const getToggleValue = async (address) => {
        try {
            let contractAddress = "023deafee1f870ef08cfe34ab197d05845885156f1";
            const rpcConfig = {
                urlBaseGlobal: { url: 'https://node1.testnet.partisiablockchain.com', shard_id: 99 },
                urlBaseShards: [
                    { url: 'https://node1.testnet.partisiablockchain.com/shards/Shard0', shard_id: 0 },
                    { url: 'https://node1.testnet.partisiablockchain.com/shards/Shard1', shard_id: 1 },
                    { url: 'https://node1.testnet.partisiablockchain.com/shards/Shard2', shard_id: 2 },
                ],
            }
            let rpc = PartisiaAccount(rpcConfig)
            let contract = await rpc.getContract(contractAddress, rpc.deriveShardId(contractAddress), true);
            let abi = contract.data.abi;
            const fileAbi = await new AbiParser(Buffer.from(abi, 'base64')).parseAbi()
            const reader = new StateReader(Buffer.from(contract.data.serializedContract?.state.data, 'base64'), fileAbi.contract)
            const struct = reader.readStruct(fileAbi.contract.getStateStruct())
            let data = JsonValueConverter.toJson(struct).toogle_users;
            let isToggleOn = data.includes(address);
            return isToggleOn;
        } catch (error) {
            return false
        }
    }

    const initAbi = async (contractAddress) => {
        try {
            const rpcConfig = {
                urlBaseGlobal: { url: 'https://node1.testnet.partisiablockchain.com', shard_id: 99 },
                urlBaseShards: [
                    { url: 'https://node1.testnet.partisiablockchain.com/shards/Shard0', shard_id: 0 },
                    { url: 'https://node1.testnet.partisiablockchain.com/shards/Shard1', shard_id: 1 },
                    { url: 'https://node1.testnet.partisiablockchain.com/shards/Shard2', shard_id: 2 },
                ],
            }
            let rpc = PartisiaAccount(rpcConfig)
            const contract = await rpc.getContract(contractAddress, rpc.deriveShardId(contractAddress), true)
            let abi = contract.data.abi;
            const fileAbi = await new AbiParser(Buffer.from(abi, 'base64')).parseAbi()
            const shardId = rpc.deriveShardId(address)
            const url = rpc.getShardUrl(shardId)
            const nonce = await rpc.getNonce(address)
            return { fileAbi, nonce };
        } catch (error) {
            console.log(error)
        }
    }

    const transaction = async () => {
        try {
            const sdk = new PartisiaSdk({ seed: sdkObject.seed, connection: sdkObject.connection });
            const contract = '023deafee1f870ef08cfe34ab197d05845885156f1'

            let abiFunction = await initAbi(contract);
            let abi = abiFunction.fileAbi;
            const fnAbi = abi.contract.getFunctionByName('toggle_status');

            const dataPayload = serializePulicContract(fnAbi, abi.contract, [])
            const nonce = abiFunction.nonce

            // // Turn the payload buffer into a fully serialized transaction
            const serialized = partisiaCrypto.transaction.serializedTransaction(
                {
                    nonce, validTo: Date.now() + 120 * 1000,
                    cost: "8392.5"
                },
                { contract },
                dataPayload,
            )

            // // Sign it from the wallet
            const res = await sdk.signMessage({
                payload: serialized.toString('hex'),
                payloadType: 'hex',
                dontBroadcast: false,
            })
            console.log(res);
            setToggle(!toggle);
            await localStorage.setItem("status", true);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className="header1 solutionm4_header1 cid-t4LxNR6lJL mbr-fullscreen" id="header1-1">

                <div className="mbr-overlay"></div>
                <div className="container align-center">
                    <div id="div-insert-react" className="row justify-content-center">
                        <div className="mbr-white col-md-12 col-lg-12">

                            <h1 className="mbr-section-title mbr-white pb-4 mbr-fonts-style display-1"><strong>The Web3 Cookie&nbsp;</strong></h1>
                            <p className="mbr-text pb-4 mbr-white mbr-regular mbr-fonts-style display-5">Take <strong>Ownership</strong> of your<strong> Online Journey</strong> </p>
                            <div className="container mx-auto">
                                <div>
                                    {address &&
                                        <div className='mb-3'>
                                            <span className='mr-4 text-xl'>Collect Data : </span>
                                            <input
                                                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-blue-500 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-blue-500 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchChecked"
                                                checked={toggle}
                                                onChange={transaction}
                                            />
                                        </div>
                                    }
                                    {!address
                                        ? <button type="button" className="connect-wallet-js-target text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-800 bg-blue-500" onClick={connect}>Connect Wallet</button>
                                        : <button type="button" className="connect-wallet-js-target text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-800 bg-blue-500" onClick={disconnect}>Disconnect Wallet</button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div id="root"></div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
