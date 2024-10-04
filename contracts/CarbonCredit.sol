// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonCredit is ERC721, Ownable {
    uint256 private _nextTokenId;

    struct Credit {
        uint256 amount; // Amount of carbon offset (tonnes)
        string projectType; // Type of carbon offset
        uint256 validUntil; // Time until which the credit is valid
        bool verified; 
        string metadataURI; // additional metadata
    }

    mapping(uint256 => Credit) public credits;

    event CreditMinted(uint256 indexed tokenId, address indexed owner, uint256 amount);
    event CreditVerified(uint256 indexed tokenId);

    constructor() ERC721("Carbon Credit", "CC") Ownable(msg.sender) {}

    function mintCredit(
        address recipient,
        uint256 amount,
        string memory projectType,
        uint256 validityPeriod,
        string memory metadataURI
    ) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(recipient, tokenId);
        
        credits[tokenId] = Credit({
            amount: amount,
            projectType: projectType,
            validUntil: block.timestamp + validityPeriod,
            verified: false,
            metadataURI: metadataURI
        });

        emit CreditMinted(tokenId, recipient, amount);
        return tokenId;
    }

    function verifyCredit(uint256 tokenId) public onlyOwner {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        credits[tokenId].verified = true;
        emit CreditVerified(tokenId);
    }

    function getCreditDetails(uint256 tokenId) public view returns (Credit memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return credits[tokenId];
    }
}