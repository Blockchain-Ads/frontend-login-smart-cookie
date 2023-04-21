export const ConnectWalletButton = (props:any) => {
  return (
    <button type="button" onClick={props.connectWallet} className="connect-wallet-js-target text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-800 bg-blue-500"><span className="fa fa-unlock mbr-iconfont mbr-iconfont-btn"></span>Connect Wallet</button>
  );
}
