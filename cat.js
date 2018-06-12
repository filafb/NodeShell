function cat(cmd, fileName) {
  const fs = require('fs');
  const pwd = require('./pwd.js');
  fs.readFile( pwd(fileName), (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\npromt > ');
    }
  });
}

module.exports = cat;

