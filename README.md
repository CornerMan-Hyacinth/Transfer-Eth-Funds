# Transfer-Eth-Funds

This smart contract is created to send Testnet (GOERLI) Eth from one account to another.

To do this, the solidity file has a constructor that is deployed with an argument for the recipient's public address; a receiveFund function is created to to receive the funds to be transferred, while the doTransfer function automatically sends the funds to the address specified during deployment (within the constructor).

The project has two scripts:

```shell
../deploy/01-deploy-transfer-fund.js which deploys the contract.
../scripts/doTransfer.js which is triggered/ran when user intends to transfer funds.
```

NOTE: This project is a minor codebase and hence has no test scripts and sensitive information might be hardcoded. It should be revised for real-life problems.
