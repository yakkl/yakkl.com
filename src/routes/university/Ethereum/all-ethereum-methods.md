Here's a comprehensive table listing the Ethereum `eth_` methods, grouped into categories such as 'State change', 'Readonly - no state change', 'Block and Transaction Information', 'Mining', 'Filter and Log', and 'Miscellaneous'. Each entry includes the method name, description, and a TypeScript example.

### State Change

| Method                        | Description                                            | TypeScript Example |
|-------------------------------|--------------------------------------------------------|---------------------|
| `eth_sendRawTransaction`      | Sends a signed transaction to the network.             | ```typescriptimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nconst signedTx = '0xSignedTransactionData';\nweb3.eth.sendSignedTransaction(signedTx)\n  .on('receipt', console.log);\n``` |
| `eth_sendTransaction`         | Creates and sends a new transaction to the network.    | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.sendTransaction({\n  from: '0xYourAddress',\n  to: '0xRecipientAddress',\n  value: '1000000000000000000'\n})\n  .on('receipt', console.log);\n``` |

### Readonly - No State Change

| Method                        | Description                                            | TypeScript Example |
|-------------------------------|--------------------------------------------------------|---------------------|
| `eth_call`                    | Executes a new message call immediately without creating a transaction on the block chain. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.call({\n  to: '0xContractAddress',\n  data: '0xFunctionSignatureAndParameters'\n})\n  .then(console.log);\n``` |
| `eth_estimateGas`             | Estimates the gas necessary to execute a transaction.  | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.estimateGas({\n  to: '0xContractAddress',\n  data: '0xFunctionSignatureAndParameters'\n})\n  .then(console.log);\n``` |
| `eth_getBalance`              | Returns the balance of the account at the given address. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getBalance('0xYourAddress')\n  .then(console.log);\n``` |
| `eth_getCode`                 | Returns the smart contract code at a given address.    | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getCode('0xContractAddress')\n  .then(console.log);\n``` |
| `eth_getStorageAt`            | Returns the value from a storage position at a given address. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getStorageAt('0xContractAddress', 0)\n  .then(console.log);\n``` |
| `eth_getTransactionCount`     | Returns the number of transactions sent from an address. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getTransactionCount('0xYourAddress')\n  .then(console.log);\n``` |

### Block and Transaction Information

| Method                        | Description                                            | TypeScript Example |
|-------------------------------|--------------------------------------------------------|---------------------|
| `eth_getBlockByHash`          | Returns information about a block by hash.             | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getBlock('0xBlockHash')\n  .then(console.log);\n``` |
| `eth_getBlockByNumber`        | Returns information about a block by block number.     | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getBlock(123456)\n  .then(console.log);\n``` |
| `eth_getBlockTransactionCountByHash` | Returns the number of transactions in a block by block hash. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getBlockTransactionCount('0xBlockHash')\n  .then(console.log);\n``` |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block by block number. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getBlockTransactionCount(123456)\n  .then(console.log);\n``` |
| `eth_getTransactionByHash`    | Returns the transaction information for a given transaction hash. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getTransaction('0xTransactionHash')\n  .then(console.log);\n``` |
| `eth_getTransactionByBlockHashAndIndex` | Returns the transaction information by block hash and transaction index. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getTransactionFromBlock('0xBlockHash', 0)\n  .then(console.log);\n``` |
| `eth_getTransactionByBlockNumberAndIndex` | Returns the transaction information by block number and transaction index. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getTransactionFromBlock(123456, 0)\n  .then(console.log);\n``` |
| `eth_getTransactionReceipt`   | Returns the receipt of a transaction by transaction hash. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getTransactionReceipt('0xTransactionHash')\n  .then(console.log);\n``` |

### Mining

| Method                        | Description                                            | TypeScript Example |
|-------------------------------|--------------------------------------------------------|---------------------|
| `eth_coinbase`                | Returns the client coinbase address.                   | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getCoinbase()\n  .then(console.log);\n``` |
| `eth_getWork`                 | Returns the hash of the current block, the seedHash, and the boundary condition to be met. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getWork()\n  .then(console.log);\n``` |
| `eth_hashrate`                | Returns the number of hashes per second that the node is mining with. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getHashrate()\n  .then(console.log);\n``` |
| `eth_mining`                  | Returns true if client is actively mining new blocks.  | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.isMining()\n  .then(console.log);\n``` |
| `eth_submitHashrate`          | Used for submitting mining hashrate.                   | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.submitHashrate('0xHashrate', '0xID')\n  .then(console.log);\n``` |
| `eth_submitWork`              | Used for submitting a proof-of-work solution.          | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.submitWork('0xNonce', '0xPowHash', '0xMixDigest')\n  .then(console.log);\n``` |

### Filter and Log

| Method                        | Description                                            | TypeScript Example |
|-------------------------------|--------------------------------------------------------|---------------------|
| `eth_newFilter`               | Creates a new filter object to notify when state changes (logs). | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.filter({\n  fromBlock: '0x0',\n  toBlock: 'latest',\n  address: '0xContractAddress',\n  topics: []\n})\n  .then(console.log);\n``` |
| `eth_newBlockFilter`          | Creates a filter for new block headers.                | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.subscribe('newBlockHeaders')\n  .on('data', console.log);\n``` |
| `eth_newPendingTransactionFilter` | Creates a filter for pending transactions.            | ```typescript\nimport Web3 from 'web3';\nconst web3 = new

 Web3('<RPC_URL>');\nweb3.eth.subscribe('pendingTransactions')\n  .on('data', console.log);\n``` |
| `eth_uninstallFilter`         | Uninstalls a filter with the given id.                 | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.clearSubscriptions();\n``` |
| `eth_getFilterChanges`        | Polls for changes in the filter since last poll.       | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nconst filterId = '0xFilterId';\nweb3.eth.getFilterChanges(filterId)\n  .then(console.log);\n``` |
| `eth_getFilterLogs`           | Returns all logs for a filter.                         | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nconst filterId = '0xFilterId';\nweb3.eth.getPastLogs({\n  fromBlock: '0x0',\n  toBlock: 'latest',\n  address: '0xContractAddress',\n  topics: []\n})\n  .then(console.log);\n``` |

### Miscellaneous

| Method                        | Description                                            | TypeScript Example |
|-------------------------------|--------------------------------------------------------|---------------------|
| `eth_accounts`                | Returns a list of addresses owned by the client.       | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getAccounts()\n  .then(console.log);\n``` |
| `eth_chainId`                 | Returns the chain ID of the current network.           | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getChainId()\n  .then(console.log);\n``` |
| `eth_gasPrice`                | Returns the current price per gas in wei.              | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getGasPrice()\n  .then(console.log);\n``` |
| `eth_getCompilers`            | Returns a list of available compilers in the client.   | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getCompilers()\n  .then(console.log);\n``` |
| `eth_getProof`                | Returns the account and storage values of the specified account including the Merkle proof. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getProof('0xYourAddress', ['0x0'], 'latest')\n  .then(console.log);\n``` |
| `eth_protocolVersion`         | Returns the current ethereum protocol version.         | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.getProtocolVersion()\n  .then(console.log);\n``` |
| `eth_syncing`                 | Returns an object with data about the sync status or false. | ```typescript\nimport Web3 from 'web3';\nconst web3 = new Web3('<RPC_URL>');\nweb3.eth.isSyncing()\n  .then(console.log);\n``` |

This table provides an overview of the different `eth_` methods available for interacting with Ethereum, grouped by their primary use cases, and includes example TypeScript code for each method.
