const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarbonCredit", function () {
  let CarbonCredit, carbonCredit, owner, addr1;

  beforeEach(async function () {
    CarbonCredit = await ethers.getContractFactory("CarbonCredit");
    [owner, addr1] = await ethers.getSigners();
    carbonCredit = await CarbonCredit.deploy();
  });

  describe("Minting", function () {
    it("Should mint a new carbon credit", async function () {
      const amount = 100;
      const projectType = "Reforestation";
      const validityPeriod = 365 * 24 * 60 * 60; // 1 year in seconds
      const metadataURI = "ipfs://example";

      await expect(carbonCredit.mintCredit(
        addr1.address,
        amount,
        projectType,
        validityPeriod,
        metadataURI
      ))
        .to.emit(carbonCredit, "CreditMinted")
        .withArgs(1, addr1.address, amount);

      const credit = await carbonCredit.getCreditDetails(1);
      expect(credit.amount).to.equal(amount);
      expect(credit.projectType).to.equal(projectType);
      expect(credit.verified).to.equal(false);
      expect(credit.metadataURI).to.equal(metadataURI);
    });
  });

  describe("Verification", function () {
    it("Should verify a carbon credit", async function () {
      await carbonCredit.mintCredit(
        addr1.address,
        100,
        "Reforestation",
        365 * 24 * 60 * 60,
        "ipfs://example"
      );

      await expect(carbonCredit.verifyCredit(1))
        .to.emit(carbonCredit, "CreditVerified")
        .withArgs(1);

      const credit = await carbonCredit.getCreditDetails(1);
      expect(credit.verified).to.equal(true);
    });
  });
});