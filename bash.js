process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim().split(' ');

  require(`./${cmd[0]}.js`)(cmd[0], cmd[1]);


  // let pwd = require('./pwd.js');
  // pwd(cmd);
  // let ls = require('./ls.js');
  // ls(cmd);
  // process.stdout.write('You typed: ' + cmd);
});
