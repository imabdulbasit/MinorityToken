
const HDWalletProvider = require("truffle-hdwallet-provider");
key = 'shrimp whale field habit coin genuine ignore kid sword cloud card park'
module.exports = {


  networks: {
    
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },

    testnet: {
      provider: () => new HDWalletProvider(key, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    matic: {
      provider: () => new HDWalletProvider(key, `https://rpc-mainnet.maticvigil.com`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  mocha: {
  },


  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true
        }
      }
   
    }
  },


  db: {
    enabled: false
  }

};
