const test = require('tape');
const turn = require('../actions/turn');

test('should do nothing if not yet placed', function(t) {
  const initialState = { placed: false, report: { face: 'NORTH' } };
  let state = turn(initialState, 'left');
  t.deepEqual(state, initialState);
  t.end();
});

test('should turn left', function(t) {
  const initialState = { placed: true, report: { face: 'NORTH' } };
  let state = turn(initialState, 'left');
  t.equal(state.report.face, 'WEST');

  state = turn(state, 'left');
  t.equal(state.report.face, 'SOUTH');

  state = turn(state, 'left');
  t.equal(state.report.face, 'EAST');

  state = turn(state, 'left');
  t.equal(state.report.face, 'NORTH');

  t.end();
});

test('should turn right', function(t) {
  const initialState = { placed: true, report: { face: 'NORTH' } };
  let state = turn(initialState, 'right');
  t.equal(state.report.face, 'EAST');

  state = turn(state, 'right');
  t.equal(state.report.face, 'SOUTH');

  state = turn(state, 'right');
  t.equal(state.report.face, 'WEST');

  state = turn(state, 'right');
  t.equal(state.report.face, 'NORTH');

  t.end();
});
