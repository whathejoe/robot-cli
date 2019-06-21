const validator = answer => {
  const regex = /^(PLACE [0-4],[0-4],(NORTH|SOUTH|EAST|WEST)|MOVE|LEFT|RIGHT|REPORT)/;
  let invalid = !answer.match(regex);

  if (invalid) return 'Invalid command';

  return true;
};

module.exports = validator;
