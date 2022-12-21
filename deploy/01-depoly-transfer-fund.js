const { BigNumber } = require("ethers");
const { network } = require("hardhat");
require("dotenv").config();
const readline = require("readline");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  var ethInput = BigNumber.from(100000000000000000n);
  var recipientAddress = "0x778ae1bdb9CA3a0344a6A00680066434DdFac7a1";

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // question user to enter name
  //   await rl.question("Enter ETH Amount To Send:\n", function(string) {
  //     let addressInput = string;
  //     ethInput = Number(addressInput);

  //     // close input stream
  //     rl.close();
  //   });

  //   await rl.question("Enter Recipient's Public Address:\n", function(string) {
  //     let addressInput = string;
  //     recipientAddress = Number(addressInput);

  //     // close input stream
  //     rl.close();
  //   });

  console.log("Deploying...");

  const transferFund = await deploy("TransferFund", {
    from: deployer,
    args: [recipientAddress],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`FundMe deployed at ${transferFund.address}`);
};
