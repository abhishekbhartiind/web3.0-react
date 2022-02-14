### ZEN WEB3.0

Basic dApp with Web3 and ReactJS
[Creating simple NFT project]

Decentralized apps come in all shapes and sizes. We have decentralized market makers, flash loans, crypto games, and simple NFT sites.

Prerequisite
- ReactJS / NextJS
- MetaMask

Development
- Web3 Integration
- Smart Contract
- Basics of Blockchain
- Sending simple transactions for minting or buying NFTs
- Web3 is a tool for connecting to wallets and certain other useful features such as calculating Wei from ETH and ReactJS / NextJS is a framework for   building sites.

MetaMask
- It is an easy solution if you want to get started with blockchain or Ethereum wallets.
- It acts as a browser extension and can easily interact with web3 applications such as OpenSea
- You cannot buy cryptocurrencies with MetaMask though, you’d have to buy your cryptocurrencies via a broker such as CoinBase/WazirX to be able to use them.

Installation & Configuration
- Install MetaMask as browser extension
- It does support most browsers like Chrome and Firefox.
- Click on “create a new wallet” if you don’t already have one.
- Enter a password and agree to have read the terms and conditions.
  [Save the key phrase in any way you can. You cannot access your coins without it!]
- Some sites that feature Web3 functionality will ask you to log into their site with a popup from your wallet extension.

ABI
- ABI is a representation of our Solidity code in JSON so that Web3 knows what it can call and what to expect from the code.
- The ABI to add a contract object to our state from which we can call functions.

Getting the ABI is using Remix, an online Solidity IDE and compiler. Add a new file and paste your smart contract code into the editor. Right-click the new file in Remix and click on compile. Go to the compile tab on the left, and click the tiny ABI button to copy your ABI. paste it into a new variable in our code under the states.

# [Calling a contract view function]

There are two ways to call contract functions from Web3. It depends on the type of function to know which one to use. For view functions, and functions that do not require gas fees, we can use our new contract state to call
```
contract.methods.your_contract_function().call()


// State
const [totalSupply, setTotalSupply] = useState(0)

// Calling the totalSupply function from our ERC721Enumerable contract
contract.methods.totalSupply().call().then((_supply) => {
    // Optionally set it to the state to render it using React
    setTotalSupply(_supply)
}).catch((err) => console.log(err))
```
# [Calling a contract function that costs gas]

A contract can have a payable function. Which is where we can get our payments from if we want to. Other functions such as mint will also cost the user gas fees. These functions need to be called in a different way so that our users can accept the fees and payment.

We need to request a transaction. This will prompt the user with a popup from MetaMask asking to accept the payment and gas fees. In this case, the payment would be 1 ETH, or 1 MATIC if you’re on Polygon. The price needs to be sent in Wei instead of ETH.