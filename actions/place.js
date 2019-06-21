const place = (state, x, y, face) => {
  const report = { x: parseInt(x, 10), y: parseInt(y, 10), face };
  const placed = true;
  return { ...state, placed, report };
};

module.exports = place;
