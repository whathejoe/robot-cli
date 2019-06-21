const validator = require('./validator');

module.exports = [
  {
    type: 'input',
    name: 'input',
    message: 'Input a command:',
    validate: validator,
  },
];
