const move = state => {
  const { report, placed } = state;

  if (!placed) return state;

  let { x, y, face } = report;

  if (face === 'NORTH' && y < 4) {
    y++;
  } else if (face === 'EAST' && x < 4) {
    x++;
  } else if (face === 'SOUTH' && y > 0) {
    y--;
  } else if (face === 'WEST' && x > 0) {
    x--;
  }

  const newReport = { x, y, face };
  return { ...state, report: newReport };
};

module.exports = move;
