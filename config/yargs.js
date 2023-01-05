const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'value to multiplier table'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    describe: 'value to limit de multiplier table',
    default: 10
  })
  .option('v', {
    alias: 'verbose',
    type: 'boolean',
    describe: 'Show verbose process',
    default: false
  })
  .check((argv,options) => {
    if (isNaN(argv.b)) throw 'The base has to be a number';
    if (isNaN(argv.l)) throw 'The Limit has to be a number';
    return true;
  })
  .argv;

module.exports = argv;