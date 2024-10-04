// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CarbonCredit is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Credit {
        uint256 amount; // Amount of carbon offset in tonnes
        string projectType; // Type of carbon offset project
        uint256 validUntil; // Timestamp until which the credit is valid
        bool verified; // Verification status
        string metadataURI; // URI for additional metadata
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
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(recipient, newTokenId);
        
        credits[newTokenId] = Credit({
            amount: amount,
            projectType: projectType,
            validUntil: block.timestamp + validityPeriod,
            verified: false,
            metadataURI: metadataURI
        });

        emit CreditMinted(newTokenId, recipient, amount);
        return newTokenId;
    }

    function verifyCredit(uint256 tokenId) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        credits[tokenId].verified = true;
        emit CreditVerified(tokenId);
    }

    function getCreditDetails(uint256 tokenId) public view returns (Credit memory) {
        require(_exists(tokenId), "Token does not exist");
        return credits[tokenId];
    }
}