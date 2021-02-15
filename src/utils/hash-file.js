const crypto = require('crypto');
const fs = require('fs');

// from: https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options
module.exports = function hashFile(filePath) {
  const hash = crypto.createHash('sha256');

  const input = fs.createReadStream(filePath);

  return new Promise((resolve) => {
    input.on('readable', () => {
      const data = input.read();
      if (data) {
        hash.update(data);
      } else {
        resolve(hash.digest('hex'));
      }
    });
  });
};
