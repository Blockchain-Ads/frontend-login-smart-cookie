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
    const rpcNonce = PartisiaRpc({
        baseURL: 'https://reader.partisiablockchain.com/shards/Shard0',
    })
    const [address, setAddress] = React.useState("");
    const [sdkObject, setSDK] = React.useState();

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
            if (!toggleValue) {
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
                console.log(data);
                await addDoc(collection(db, 'web3-cookie', sdkClient.connection.account.address, 'rust-users'), data);
            }
        }
    }

    const disconnect = async () => {
        setAddress("")
    }

    const getToggleValue = async (address) => {
        let contractAddress = "02a33a2908eda2fb999e2afcbfe000f539e5e27e5b";
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
        let data = JsonValueConverter.toJson(struct).users;
        let isToggleOn = data.includes(address);
        return isToggleOn;
    }

    const initAbi = async (contractAddress) => {
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
    }

    const transaction = async () => {
        const sdk = new PartisiaSdk({ seed: sdkObject.seed, connection: sdkObject.connection });
        const contract = '02a33a2908eda2fb999e2afcbfe000f539e5e27e5b'

        let abiFunction = await initAbi(contract);
        let abi = abiFunction.fileAbi;
        const fnAbi = abi.contract.getFunctionByName('toggle_data_collection');

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
                                    {!address
                                        ? <button type="button" className="connect-wallet-js-target text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-800 bg-blue-500" onClick={connect}>Connect Wallet</button>
                                        : <button type="button" className="connect-wallet-js-target text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-800 bg-blue-500" onClick={disconnect}>Disconnect Wallet</button>
                                    }
                                    {address &&
                                        <button type="button" className="connect-wallet-js-target text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-800 bg-blue-500" onClick={transaction}>Collect Data</button>
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
