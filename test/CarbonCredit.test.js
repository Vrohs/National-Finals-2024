const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarbonCredit", function () {
  let carbonCredit, owner, addr1;
  const amount = 100;
  const projectType = "Reforestation";
  const validityPeriod = 365 * 24 * 60 * 60; // 1 year in seconds
  const metadataURI = "ipfs://example";

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    
    const CarbonCredit = await ethers.getContractFactory("CarbonCredit");
    carbonCredit = await CarbonCredit.deploy();
  });

  describe("Minting", function () {
    it("Should mint a new carbon credit", async function () {
      await expect(carbonCredit.mintCredit(
        addr1.address,
        amount,
        projectType,
        validityPeriod,
        metadataURI
      ))
        .to.emit(carbonCredit, "CreditMinted")
        .withArgs(0, addr1.address, amount);

      const credit = await carbonCredit.getCreditDetails(0);
      expect(credit.amount).to.equal(amount);
      expect(credit.projectType).to.equal(projectType);
      expect(credit.verified).to.equal(false);
      expect(credit.metadataURI).to.equal(metadataURI);
    });
  });

  describe("Verification", function () {
    it("Should verify a carbon credit", async function () {
      // First mint a credit
      await carbonCredit.mintCredit(
        addr1.address,
        amount,
        projectType,
        validityPeriod,
        metadataURI
      );

      // Then verify it
      await expect(carbonCredit.verifyCredit(0))
        .to.emit(carbonCredit, "CreditVerified")
        .withArgs(0);

      const credit = await carbonCredit.getCreditDetails(0);
      expect(credit.verified).to.equal(true);
    });

    it("Should fail to verify non-existent credit", async function () {
      await expect(carbonCredit.verifyCredit(999))
        .to.be.revertedWith("Token does not exist");
    });
  });
});