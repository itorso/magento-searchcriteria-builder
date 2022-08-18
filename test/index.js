const Builder = require('../src/builder');
const data = require('./data');

const builder = new Builder();
const output = builder.process(data);
console.log(output);