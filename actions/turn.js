const leftLookup = {
  NORTH: 'WEST',
  EAST: 'NORTH',
  SOUTH: 'EAST',
  WEST: 'SOUTH',
};

const rightLookup = {
  NORTH: 'EAST',
  EAST: 'SOUTH',
  SOUTH: 'WEST',
  WEST: 'NORTH',
};

const turn = (state, direction) => {
  const { report, placed } = state;

  if (!placed) return state;

  const lookup = direction === 'left' ? leftLookup : rightLookup;

  const { face } = report;
  const newFace = lookup[face];
  const newReport = { ...report, face: newFace };
  return { ...state, report: newReport };
};

module.exports = turn;
