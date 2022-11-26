// abi is the contract Application Binary Interface.
// It's the standard way to interact with the Ethereum ecosystem.
// Both from outside of the blockchain and for contract to contract interactions.
// It contains all information about one specific smart contract.
import { abi } from './Transactions.json';

// For building and doing functions in Ethereum blockchain, it always contains gaas fees.
// For this specific smart contract, it cost 0.0121 Ethereum in the Ropsten test network.

export const contractABI = abi;
export const contractAddress = '0x4D96568D21759e1d19aDf0b73d6127fA0bF0BC4A';
