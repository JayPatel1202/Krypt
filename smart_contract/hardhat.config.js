// https://eth-ropsten.alchemyapi.io/v2/PyGw56R9fNzjlc5AXxQYozM6rd5wJ5WW

// Plugin for build smart contract tests
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PyGw56R9fNzjlc5AXxQYozM6rd5wJ5WW',
      accounts: [
        '7a8388c7a690a947b7df9b566d05c4eaec2a5857594eb3fdc562fbef7da2b4c9',
      ],
    },
  },
};
