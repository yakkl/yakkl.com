Thank you for pointing that out. Here’s the revised list, noting the use of the native `bigint` type in place of `BigNumber`.

### Providers

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `new ethers.JsonRpcProvider(url)`          | Connect to an Ethereum JSON-RPC endpoint.                    |
| `provider.getBlockNumber()`                | Get the latest block number.                                 |
| `provider.getNetwork()`                    | Get the current network details.                             |
| `provider.getGasPrice()`                   | Get the current gas price.                                   |
| `provider.getBalance(address)`             | Get the balance of an address.                               |
| `provider.getTransaction(transactionHash)` | Get transaction details by hash.                             |
| `provider.getTransactionReceipt(txHash)`   | Get the receipt of a transaction by hash.                    |
| `provider.getBlock(blockHashOrNumber)`     | Get a block by hash or block number.                         |
| `provider.call(transaction)`               | Call a smart contract method (no state change).              |
| `provider.estimateGas(transaction)`        | Estimate gas for a transaction.                              |
| `provider.getCode(address)`                | Get the bytecode of a contract deployed at a specific address.|
| `provider.getStorage(address, position)`   | Get the storage at a specific position of a contract.        |
| `provider.resolveName(name)`               | Resolve an ENS name to an address.                           |
| `provider.lookupAddress(address)`          | Lookup an ENS name associated with an address.               |
| `provider.on(event, callback)`             | Listen for events.                                           |
| `provider.off(event, callback)`            | Remove event listener.                                       |
| `provider.send(method, params)`            | Send a raw JSON-RPC request.                                 |

### Wallets

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `new ethers.Wallet(privateKey, provider)`  | Create a new wallet with a private key and connect to a provider. |
| `ethers.Wallet.createRandom()`             | Create a new wallet with a random private key.               |
| `wallet.address`                           | Get the wallet address.                                      |
| `wallet.signMessage(message)`              | Sign a message.                                              |
| `wallet.signTransaction(transaction)`      | Sign a transaction.                                          |
| `wallet.sendTransaction(transaction)`      | Send a transaction.                                          |
| `wallet.getBalance()`                      | Get the wallet's balance.                                    |
| `wallet.getTransactionCount()`             | Get the number of transactions sent from the wallet.         |
| `wallet.connect(provider)`                 | Connect the wallet to a provider.                            |
| `wallet.encrypt(password)`                 | Encrypt the wallet's private key.                            |

### Contract Interaction

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `new ethers.Contract(address, abi, signerOrProvider)` | Interact with a smart contract.                      |
| `contract.deployTransaction`               | Get the transaction used to deploy the contract.             |
| `contract.deploy()`                        | Deploy a contract.                                           |
| `contract.address`                         | Get the contract address.                                    |
| `contract.interface`                       | Get the contract's interface.                                |
| `contract.functions`                       | Get all functions in the contract.                           |
| `contract.functionName(args)`              | Call a contract function.                                    |
| `contract.functionName(args, overrides)`   | Call a contract function with overrides (e.g., gas limit).   |
| `contract.on(event, callback)`             | Listen for contract events.                                  |
| `contract.off(event, callback)`            | Remove event listener.                                       |
| `contract.estimateGas.functionName(args)`  | Estimate gas for a function call.                            |
| `contract.populateTransaction.functionName(args)` | Get the populated transaction for a function call.  |
| `contract.filters.eventName(args)`         | Create a filter for an event.                                |

### Utilities

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `ethers.utils.formatEther(wei)`            | Format wei to ether.                                         |
| `ethers.utils.parseEther(etherString)`     | Parse ether to wei.                                          |
| `ethers.utils.formatUnits(value, units)`   | Format units to string.                                      |
| `ethers.utils.parseUnits(string, units)`   | Parse string to units.                                       |
| `ethers.utils.keccak256(data)`             | Compute the keccak256 hash of data.                          |
| `ethers.utils.sha256(data)`                | Compute the sha256 hash of data.                             |
| `ethers.utils.id(text)`                    | Compute the keccak256 hash of UTF-8 encoded text.            |
| `ethers.utils.getAddress(address)`         | Validate and format an Ethereum address.                     |
| `ethers.utils.getContractAddress(tx)`      | Compute the contract address created by a transaction.       |
| `ethers.utils.arrayify(hexString)`         | Convert a hex string to an array of bytes.                   |
| `ethers.utils.hexlify(array)`              | Convert an array of bytes to a hex string.                   |
| `ethers.utils.randomBytes(length)`         | Generate a random byte array.                                |
| `ethers.utils.hexZeroPad(hexString, length)` | Pad a hex string to a specified length.                    |
| `ethers.utils.splitSignature(signature)`   | Split a signature into its components (r, s, v).             |
| `ethers.utils.joinSignature({ r, s, v })`  | Join signature components into a single string.              |

### ENS (Ethereum Name Service)

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `provider.resolveName(name)`               | Resolve an ENS name to an address.                           |
| `provider.lookupAddress(address)`          | Lookup an ENS name associated with an address.               |

### Signing and Verifying Messages

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `wallet.signMessage(message)`              | Sign a message with the wallet's private key.                |
| `ethers.utils.verifyMessage(message, signature)` | Verify a signed message.                             |

### Bigint

| Function / Method                          | Description                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `BigInt(value)`                            | Create a bigint instance.                                    |
| `bigint + value`                           | Add a value to the bigint.                                   |
| `bigint - value`                           | Subtract a value from the bigint.                            |
| `bigint * value`                           | Multiply the bigint by a value.                              |
| `bigint / value`                           | Divide the bigint by a value.                                |
| `bigint % value`                           | Get the modulus of the bigint by a value.                    |
| `bigint ** value`                          | Raise the bigint to the power of a value.                    |
| `bigint.toString()`                        | Convert the bigint to a string.                              |

For more detailed information and additional functionalities, please refer to the official [ethers.js documentation](https://docs.ethers.org/v6/).
