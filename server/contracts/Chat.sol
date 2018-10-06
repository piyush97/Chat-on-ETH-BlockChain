pragma solidity ^0.4.20;
pragma experimental ABIEncoderV2;

contract Chat {
    
    string[] public messages;
    uint public bounty;
    bool public bountyPaid = false;
    address public manager;
    
    constructor(uint cbounty) public {
        manager = msg.sender;
        bounty = cbounty;
    }
    
    
    function payBounty() public payable {
        require(msg.value >= bounty);
        bountyPaid = true;
    }
    
    function getPayment() {
        require(msg.sender == manager);
        require(address(this).balance >= bounty);
        manager.transfer(this.balance);
    }
    
    function sendMessage(string message) {
        require (bountyPaid == true);
        messages.push(message);
        newMessage(msg.sender, messages);
    }
    
    function getMessages() public view returns(string[]){
        return messages;
    }
    
    event newMessage (address from, string[] messageList);
    
    
    
}