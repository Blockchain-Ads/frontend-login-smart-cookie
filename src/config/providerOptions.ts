import WalletConnect from "@walletconnect/web3-provider";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: "6aeccddcd63844c7bffd615e69264ebb" // required
    }
  }
};
// const options = new WalletConnectProvider({
//   rpc: {
//     80001: "https://polygon-mumbai.g.alchemy.com/v2/B3FLq5PK0Eye8mW-JLktdwzkeA3oHK4k"
//   },
//   infuraId: "6aeccddcd63844c7bffd615e69264ebb"
// });
// export const providerOptions = {
//   walletconnect: {
//     package: WalletConnect, // required
//     options: options
//   }
// };
