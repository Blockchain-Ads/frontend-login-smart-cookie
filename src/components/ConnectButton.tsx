export const ConnectWalletButton = (props:any) => {
  return (

      <button onClick={props.connectWallet} type="button" className="flex w-2/3 item-center justify-center text-gray-900 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
        Connect your wallet
      </button>

  );
}
