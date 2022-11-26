// Running this script, the transactions is gonna be deployed, as the address of the smart contract deployed on blockchain

async function main() {
  const Transactions = await hre.ethers.getContractFactory('Transactions');
  // Instance of Transactions
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log('Transactions deployed to:', transactions.address);
}

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
