const parseInput = input => {
  const regex = /(\w|\d)+/gi;
  return input.match(regex);
};

module.exports = parseInput;
