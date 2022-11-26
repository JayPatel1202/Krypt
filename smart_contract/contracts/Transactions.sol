// License
// SPDX-License-Identifier: UNLICENSED

// Solidity version used
pragma solidity ^0.8.0;

// This smart contract transfer amount and store all transactions thet come through it

// contract is class-like in OOP languages 
contract Transactions {
  // static type for variables => unsigned integer 256 size
  uint256 transactionCount;

  // Transfer has parameters. address is type, from is variable name
  event Transfer(
    address from,
    address receiver,
    uint amount,
    string message,
    uint256 timestamp,
    string keyword
  );

  // Object structure
  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  // Concluding, transactions is gonna be an array of TransferStruct objects 
  TransferStruct[] transactions;

  // Public: Functions needs visibility, because contracts is class-like
  // address payable is type, receive is name of variable
  // memorymeans specific data stored in memory of the transaction (additional data to transaction)

  function addToBlockchain(
      address payable receiver,
      uint amount,
      string memory message,
      string memory keyword
    ) public {
    transactionCount += 1;
    // We got msg.sender object immediatly when called some specific function from the blockchain
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    // Now we call (emit) the Transfer Event, passing the same parameters
    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  // This function returns TransferStruct in memory
  function getAllTransactions() public view returns(TransferStruct[] memory) {
    return transactions;

  }

  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }
}