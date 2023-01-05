const fs = require('fs');
const colors = require('colors');

const getTableOfNumber = async (base = 1, limit = 10, verbose = false) => {

  let answer = '';
  let verboseAnswer = '';
  for (let index = 1; index <= limit ; index++) {
    let operationAnswer = base*index;
    answer += `${base} x ${index} = ${operationAnswer}${index<limit ? '\n' : ''}`;
    verboseAnswer += `${base} ${'x'.red} ${index} ${'='.red} ${operationAnswer}${index<limit ? '\n' : ''}`;
  }
  
  if (verbose) {
    console.log('====================================='.green);
    console.log('CREATING TABLE'.blue, colors.red(base));
    console.log('====================================='.green);
    console.log(verboseAnswer);
  }
  
  
  try {
    const fileName =  `tablas-${base}.txt`;
    await fs.writeFileSync(`dataout/${fileName}`, answer);
    return fileName;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getTableOfNumber
}