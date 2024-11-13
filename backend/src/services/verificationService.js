const axios = require('axios');

class VerificationService {
  async verifyCredit(tokenId, projectData) {
    try {
      const response = await axios.post('https://mock-verification-api.com/verify', {
        tokenId,
        projectData
      });

      if (response.data.verified) {
        return {
          success: true,
          verificationData: {
            verifier: 'Mock Verification Service',
            timestamp: Date.now(),
            metadataURI: `https://mock-verification-api.com/metadata/${tokenId}`
          }
        };
      } else {
        return { success: false, reason: response.data.reason };
      }
    } catch (error) {
      console.error('Verification error:', error);
      return { success: false, reason: 'Verification service error' };
    }
  }
}

module.exports = new VerificationService();
