const defaultNetworksData = [
  {
    labelKey: 'mainnet',
    iconColor: '#29B6AF',
    providerType: 'mainnet',
    rpcUrl: 'https://explorer.simplechainn.com/rpc',
    chainId: '2',
    ticker: 'SIPC',
    blockExplorerUrl: 'https://explorer.simplechainn.com',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:8545/',
    blockExplorerUrl: 'https://explorer.simplechain.com',
  },
]

export {
  defaultNetworksData,
}
