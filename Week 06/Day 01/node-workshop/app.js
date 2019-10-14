
// create a folder
// in the terminal, you navigate inside the folder
// initialize node project: `npm init -y`
// install a library: `npm install moment`, `npm install <library-name>`
// create your own module
// create a file, for example: example.js
// export from there: `module.exports = text`;
// import it where you want to use it: `const t = require('./example.js');`

const moment = require('moment');
const t = require('./example.js');

console.log('hello world');
console.log(moment().format('LTS'));
console.log(t);
