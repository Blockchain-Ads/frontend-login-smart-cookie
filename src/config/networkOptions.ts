export type HexChainIdOptions = "0x5"
export type NetworkOption = {
        chainId: string;
        rpcUrls: string[];
        chainName: string;
        nativeCurrency: {
            name: string;
            decimals: number;
            symbol: string;
        };
        blockExplorerUrls: string[];
        iconUrls: string[];
}
export type NetworkOptions = Record<HexChainIdOptions, NetworkOption>

export const networkOptions: NetworkOptions = {
  "0x5": {
    chainId: "0x5",
    rpcUrls: ["https://goerli.infura.io/v3/f5a8016d22144904b71b3ec15d298b86"],
    chainName: "Goerli test network",
    nativeCurrency: { name: "GoerliETH", decimals: 18, symbol: "GoerliETH" },
    blockExplorerUrls: ["https://goerli.etherscan.io"],
    iconUrls: ["https://avatars.githubusercontent.com/u/43071041?s=200&v=4.png"]
  }
};
