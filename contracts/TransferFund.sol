// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract TransferFund {
    // 1. Accept how much eth to send
    // 2. Accept recipient's public address
    // 3. Function to recieve the funds
    // 4. Function to send the funds

    address public immutable i_recipientAddress;

    constructor(address recipientAddress) {
        i_recipientAddress = recipientAddress;
    }

    function recieveFunds() public payable {
        // payable(address(this)).transfer(i_ethToSend);
    }

    function doTransfer() public {
        // payable(i_recipientAddress).transfer(address(this).balance);
        (bool callSuccess, ) = payable(i_recipientAddress).call{
            value: address(this).balance
        }("");
        require(callSuccess, "Call failed");
    }

    fallback() external payable {
        recieveFunds();
    }

    receive() external payable {
        recieveFunds();
    }
}
