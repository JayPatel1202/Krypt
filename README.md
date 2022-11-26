# krypt
Krypt is a Web 3.0 Blockchain Application built together with Javascript Mastery

## Techs used in this project

- Vite
- ReactJS
- Solidity
- [Hardhat](https://hardhat.org)

### Initialyzing HardHat

```sh
cd ./smart_contract && npx hardhat
```

### Testing waffle script

```sh
cd ./smart_contract && npx hardhat run scripts/deploy.js --network ropsten
```

### Utils

- [Metamask](https://metamask.io/)
- [Ropsten faucet](https://faucet.egorfine.com/)
- [Alchemy](https://alchemy.com/)
- 

### Important
For frontend deploy, necessary to change `vite.config.js`:
```js
export default defineConfig({
  base: '/krypt/',
  plugins: [react()],
});
```