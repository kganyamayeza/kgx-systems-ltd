const Web3 = require('web3');
const { abi, evm } = require('../artifacts/YourSmartContract.json'); // Replace with your smart contract's ABI and bytecode

const web3 = new Web3(new Web3.providers.HttpProvider('https://your.ethereum.node')); // Replace with your Ethereum node URL

const contractAddress = '0xYourContractAddress'; // Replace with your deployed contract address
const contract = new web3.eth.Contract(abi, contractAddress);

const createTransaction = async (data) => {
    const accounts = await web3.eth.getAccounts();
    const transaction = await contract.methods.createTransaction(data).send({ from: accounts[0] });
    return transaction;
};

const verifyTransaction = async (transactionHash) => {
    const transaction = await web3.eth.getTransaction(transactionHash);
    return transaction;
};

const getTransactionReceipt = async (transactionHash) => {
    const receipt = await web3.eth.getTransactionReceipt(transactionHash);
    return receipt;
};

module.exports = {
    createTransaction,
    verifyTransaction,
    getTransactionReceipt,
};