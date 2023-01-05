const { getTableOfNumber } = require('./src/multiplier.js');
const argv = require('./config/yargs');


console.clear();

getTableOfNumber(argv.b, argv.l, argv.v)
  .then( fileName => console.log(fileName, 'CREATED!!!'))
  .catch( err => console.log(err));

