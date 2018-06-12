process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  require(`./${cmd}.js`)(cmd);
  // let pwd = require('./pwd.js');
  // pwd(cmd);
  // let ls = require('./ls.js');
  // ls(cmd);
  // process.stdout.write('You typed: ' + cmd);
});
