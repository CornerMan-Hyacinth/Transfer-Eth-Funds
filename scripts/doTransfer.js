const { ethers, getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const transferFund = await ethers.getContract("TransferFund", deployer);
  console.log(`Got contract TransferFund at ${transferFund.address}`);

  console.log("Funding contract...");
  console.log("Transferring fund...");
  const transactionResponse1 = await transferFund.recieveFunds({
    gasLimit: 200000,
    value: ethers.utils.parseEther("0.1"),
  });
  await transactionResponse1.wait();
  console.log("Funded!");

  console.log("Sending Fund...");
  const transactionResponse2 = await transferFund.doTransfer();
  await transactionResponse2.wait();
  console.log("Funds Sent!");
  console.log("\nCompleted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
