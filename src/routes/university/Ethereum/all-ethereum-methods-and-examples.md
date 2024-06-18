Here's the complete list of `eth_` methods, grouped and formatted appropriately. Each method is accompanied by a description and a TypeScript example. These are the methods that can be used to interact with the Ethereum network using JSON-RPC natively.

> Note: The examples provided are formatted in TypeScript and use the ethers.js library to interact with the Ethereum network. You can use any other library or language to interact with the Ethereum network using JSON-RPC. Also, these examples are for educational purposes only and should not be used as is. Always ensure that you are following best practices and security guidelines when interacting with the Ethereum network. These examples are provided as a reference to help you understand how to interact with the Ethereum network using JSON-RPC. For a production environment, you must ensure that you are following best practices and security guidelines with robust error handling and security measures.

As of: May 27, 2024

### State Change - These Methods Change the State of the Blockchain

| Method                        | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `eth_sendRawTransaction`      | Sends a signed transaction to the network.             |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the signed transaction data
const signedTx = '0xSignedTransactionData';

// Send the signed transaction
async function sendRawTransaction() {
  const txResponse = await provider.sendTransaction(signedTx);
  console.log('Transaction Response:', txResponse);

  const receipt = await txResponse.wait();
  console.log('Transaction Receipt:', receipt);
}

sendRawTransaction();
```

| `eth_sendTransaction`         | Creates and sends a new transaction to the network.    |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the sender's wallet
const privateKey = 'your-private-key';
const wallet = new ethers.Wallet(privateKey, provider);

// Define the transaction
const tx = {
  to: '0xRecipientAddress',
  value: ethers.utils.parseEther('1.0') // Sending 1 ether
};

// Send the transaction
async function sendTransaction() {
  const txResponse = await wallet.sendTransaction(tx);
  console.log('Transaction Response:', txResponse);

  const receipt = await txResponse.wait();
  console.log('Transaction Receipt:', receipt);
}

sendTransaction();
```

### Readonly - No State Change - These Methods Do Not Change the State of the Blockchain

| Method                        | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `eth_call`                    | Executes a new message call immediately without creating a transaction on the blockchain. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the call data
const callData = {
  to: '0xContractAddress',
  data: '0xFunctionSignatureAndParameters'
};

// Execute the call
async function call() {
  const result = await provider.call(callData);
  console.log('Call Result:', result);
}

call();
```

| `eth_estimateGas`             | Estimates the gas necessary to execute a transaction.  |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the transaction
const tx = {
  to: '0xContractAddress',
  data: '0xFunctionSignatureAndParameters'
};

// Estimate the gas
async function estimateGas() {
  const gasEstimate = await provider.estimateGas(tx);
  console.log('Gas Estimate:', gasEstimate.toString());
}

estimateGas();
```

| `eth_getBalance`              | Returns the balance of the account at the given address. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the address
const address = '0xYourAddress';

// Get the balance
async function getBalance() {
  const balance = await provider.getBalance(address);
  console.log('Balance:', ethers.utils.formatEther(balance));
}

getBalance();
```

| `eth_getCode`                 | Returns the smart contract code at a given address.    |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the contract address
const address = '0xContractAddress';

// Get the contract code
async function getCode() {
  const code = await provider.getCode(address);
  console.log('Contract Code:', code);
}

getCode();
```

| `eth_getStorageAt`            | Returns the value from a storage position at a given address. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the contract address and storage position
const address = '0xContractAddress';
const position = 0;

// Get the storage value
async function getStorageAt() {
  const storageValue = await provider.getStorageAt(address, position);
  console.log('Storage Value:', storageValue);
}

getStorageAt();
```

| `eth_getTransactionCount`     | Returns the number of transactions sent from an address. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the address
const address = '0xYourAddress';

// Get the transaction count
async function getTransactionCount() {
  const txCount = await provider.getTransactionCount(address);
  console.log('Transaction Count:', txCount);
}

getTransactionCount();
```

### Block and Transaction Information - These Methods Provide Information About Blocks and Transactions

| Method                        | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `eth_getBlockByHash`          | Returns information about a block by hash.             |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the block hash
const blockHash = '0xBlockHash';

// Get block information
async function getBlockByHash() {
  const block = await provider.getBlock(blockHash);
  console.log('Block:', block);
}

getBlockByHash();
```

| `eth_getBlockByNumber`        | Returns information about a block by block number.     |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the block number
const blockNumber = 123456;

// Get block information
async function getBlockByNumber() {
  const block = await provider.getBlock(blockNumber);
  console.log('Block:', block);
}

getBlockByNumber();
```

| `eth_getBlockTransactionCountByHash` | Returns the number of transactions in a block by block hash. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the block hash
const blockHash = '0xBlockHash';

// Get the transaction count for the block
async function getBlockTransactionCountByHash() {
  const txCount = await provider.getBlockTransactionCount(blockHash);
  console.log('Transaction Count:', txCount);
}

getBlockTransactionCountByHash();
```

| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block by block number. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the block number
const blockNumber = 123456;

// Get the transaction count for the block
async function getBlockTransactionCountByNumber() {
  const txCount = await provider.getBlockTransactionCount(blockNumber);
  console.log('Transaction Count:', txCount);
}

getBlockTransactionCountByNumber();
```

| `eth_getTransactionByHash`    | Returns the transaction information for a given transaction hash. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the transaction hash
const txHash = '0xTransactionHash';

// Get transaction information
async function getTransactionByHash() {
  const tx = await provider.getTransaction(txHash);
  console.log('Transaction:', tx);
}

getTransactionByHash();
```

| `eth_getTransactionByBlockHashAndIndex` | Returns the transaction information by block hash and transaction index. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the block hash and transaction index
const blockHash = '0xBlockHash';
const txIndex = 0;

// Get transaction information
async function getTransactionByBlockHashAndIndex() {
  const tx = await provider.getTransactionFromBlock(blockHash, txIndex);
  console.log('Transaction:', tx);
}

getTransactionByBlockHashAndIndex();
```

| `eth_getTransactionByBlockNumberAndIndex` | Returns the transaction information by block number and transaction index. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the block number and transaction index
const blockNumber = 123456;
const txIndex = 0;

// Get transaction information
async function getTransactionByBlockNumberAndIndex() {
  const tx = await provider.getTransactionFromBlock(blockNumber, txIndex);
  console.log('Transaction:', tx);
}

getTransactionByBlockNumberAndIndex();
```

| `eth_getTransactionReceipt`   | Returns the receipt of a transaction by transaction hash. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the transaction hash
const txHash = '0xTransactionHash';

// Get the transaction receipt
async function getTransactionReceipt() {
  const receipt = await provider.getTransactionReceipt(txHash);
  console.log('Transaction Receipt:', receipt);
}

getTransactionReceipt();
```

### Staking - These Methods Are Relevant for Proof of Stake (PoS) Networks but are not how to stake

| Method                        | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `eth_coinbase`                | Returns the client coinbase address (now less relevant for PoS).                   |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get the coinbase

 address
async function getCoinbase() {
  const coinbase = await provider.send('eth_coinbase', []);
  console.log('Coinbase Address:', coinbase);
}

getCoinbase();
```

| `eth_syncing`                 | Returns an object with data about the sync status or false. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get sync status
async function isSyncing() {
  const syncing = await provider.send('eth_syncing', []);
  console.log('Syncing:', syncing);
}

isSyncing();
```

### Filter and Log - These Methods Are Used to Filter and Retrieve Logs

| Method                        | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `eth_newFilter`               | Creates a new filter object to notify when state changes (logs). |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the filter options
const filterOptions = {
  fromBlock: '0x0',
  toBlock: 'latest',
  address: '0xContractAddress',
  topics: []
};

// Create a new filter
async function newFilter() {
  const filterId = await provider.send('eth_newFilter', [filterOptions]);
  console.log('Filter ID:', filterId);
}

newFilter();
```

| `eth_newBlockFilter`          | Creates a filter for new block headers.                |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Create a new block filter
async function newBlockFilter() {
  const filterId = await provider.send('eth_newBlockFilter', []);
  console.log('Block Filter ID:', filterId);
}

newBlockFilter();
```

| `eth_newPendingTransactionFilter` | Creates a filter for pending transactions.            |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Create a new pending transaction filter
async function newPendingTransactionFilter() {
  const filterId = await provider.send('eth_newPendingTransactionFilter', []);
  console.log('Pending Transaction Filter ID:', filterId);
}

newPendingTransactionFilter();
```

| `eth_uninstallFilter`         | Uninstalls a filter with the given id.                 |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the filter ID
const filterId = '0xFilterId';

// Uninstall the filter
async function uninstallFilter() {
  const result = await provider.send('eth_uninstallFilter', [filterId]);
  console.log('Uninstall Filter Result:', result);
}

uninstallFilter();
```

| `eth_getFilterChanges`        | Polls for changes in the filter since last poll.       |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the filter ID
const filterId = '0xFilterId';

// Get filter changes
async function getFilterChanges() {
  const changes = await provider.send('eth_getFilterChanges', [filterId]);
  console.log('Filter Changes:', changes);
}

getFilterChanges();
```

| `eth_getFilterLogs`           | Returns all logs for a filter.                         |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the filter options
const filterOptions = {
  fromBlock: '0x0',
  toBlock: 'latest',
  address: '0xContractAddress',
  topics: []
};

// Get filter logs
async function getFilterLogs() {
  const logs = await provider.send('eth_getFilterLogs', [filterOptions]);
  console.log('Filter Logs:', logs);
}

getFilterLogs();
```

### Miscellaneous - These Methods Provide Miscellaneous Information

| Method                        | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `eth_accounts`                | Returns a list of addresses owned by the client.       |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get accounts
async function getAccounts() {
  const accounts = await provider.listAccounts();
  console.log('Accounts:', accounts);
}

getAccounts();
```

| `eth_chainId`                 | Returns the chain ID of the current network.           |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get the chain ID
async function getChainId() {
  const chainId = await provider.getNetwork().then(network => network.chainId);
  console.log('Chain ID:', chainId);
}

getChainId();
```

| `eth_gasPrice`                | Returns the current price per gas in wei.              |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get the current gas price
async function getGasPrice() {
  const gasPrice = await provider.getGasPrice();
  console.log('Gas Price:', ethers.utils.formatUnits(gasPrice, 'gwei'), 'gwei');
}

getGasPrice();
```

| `eth_getCompilers`            | Returns a list of available compilers in the client.   |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get available compilers
async function getCompilers() {
  const compilers = await provider.send('eth_getCompilers', []);
  console.log('Available Compilers:', compilers);
}

getCompilers();
```

| `eth_getProof`                | Returns the account and storage values of the specified account including the Merkle proof. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Define the address and storage keys
const address = '0xYourAddress';
const storageKeys = ['0x0'];

// Get proof
async function getProof() {
  const proof = await provider.send('eth_getProof', [address, storageKeys, 'latest']);
  console.log('Proof:', proof);
}

getProof();
```

| `eth_protocolVersion`         | Returns the current ethereum protocol version.         |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get protocol version
async function getProtocolVersion() {
  const protocolVersion = await provider.send('eth_protocolVersion', []);
  console.log('Protocol Version:', protocolVersion);
}

getProtocolVersion();
```

| `eth_syncing`                 | Returns an object with data about the sync status or false. |

```typescript
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider('<RPC_URL>');

// Get sync status
async function isSyncing() {
  const syncing = await provider.send('eth_syncing', []);
  console.log('Syncing:', syncing);
}

isSyncing();
```

This list provides a comprehensive overview of all `eth_` methods, grouped into relevant sections, with descriptions and formatted TypeScript examples for each method.
