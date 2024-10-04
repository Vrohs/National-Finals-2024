// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./CarbonCredit.sol";

contract Verification is AccessControl {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    
    CarbonCredit public carbonCredit;
    
    struct VerificationData {
        address verifier;
        uint256 timestamp;
        string metadataURI;
    }
    
    mapping(uint256 => VerificationData) public verificationRecords;
    
    event CreditVerified(uint256 indexed tokenId, address indexed verifier, string metadataURI);
    event VerifierAdded(address indexed account);
    event VerifierRemoved(address indexed account);

    constructor(address _carbonCredit) {
        carbonCredit = CarbonCredit(_carbonCredit);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(VERIFIER_ROLE, msg.sender);
    }

    function verifyCredit(uint256 tokenId, string memory verificationMetadataURI) external onlyRole(VERIFIER_ROLE) {
        carbonCredit.verifyCredit(tokenId);
        
        verificationRecords[tokenId] = VerificationData({
            verifier: msg.sender,
            timestamp: block.timestamp,
            metadataURI: verificationMetadataURI
        });
        
        emit CreditVerified(tokenId, msg.sender, verificationMetadataURI);
    }

    function addVerifier(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(VERIFIER_ROLE, account);
        emit VerifierAdded(account);
    }

    function removeVerifier(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(VERIFIER_ROLE, account);
        emit VerifierRemoved(account);
    }

    function getVerificationData(uint256 tokenId) external view returns (VerificationData memory) {
        return verificationRecords[tokenId];
    }
}