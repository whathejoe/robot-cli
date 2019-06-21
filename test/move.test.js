const test = require('tape');
const move = require('../actions/move');

test('should return same state if not placed', function(t) {
  const state = { placed: false, report: { x: 3, y: 2, face: 'NORTH' } };
  const actual = move(state);
  t.deepEqual(actual, state);
  t.end();
});

test('should increment y if facing NORTH', function(t) {
  const state = { placed: true, report: { x: 2, y: 2, face: 'NORTH' } };
  const actual = move(state);
  const expected = { placed: true, report: { x: 2, y: 3, face: 'NORTH' } };
  t.deepEqual(actual, expected);
  t.end();
});

test('should decrement y if facing SOUTH', function(t) {
  const state = { placed: true, report: { x: 2, y: 2, face: 'SOUTH' } };
  const actual = move(state);
  const expected = { placed: true, report: { x: 2, y: 1, face: 'SOUTH' } };
  t.deepEqual(actual, expected);
  t.end();
});

test('should increment x if facing EAST', function(t) {
  const state = { placed: true, report: { x: 2, y: 2, face: 'EAST' } };
  const actual = move(state);
  const expected = { placed: true, report: { x: 3, y: 2, face: 'EAST' } };
  t.deepEqual(actual, expected);
  t.end();
});

test('should decrement x if facing WEST', function(t) {
  const state = { placed: true, report: { x: 2, y: 2, face: 'WEST' } };
  const actual = move(state);
  const expected = { placed: true, report: { x: 1, y: 2, face: 'WEST' } };
  t.deepEqual(actual, expected);
  t.end();
});

test('should not allow movements beyond the 5x5 tiles', function(t) {
  let state = { placed: true, report: { x: 4, y: 4, face: 'NORTH' } };
  let actual = move(state);
  t.deepEqual(actual, state);

  state = { placed: true, report: { x: 4, y: 4, face: 'EAST' } };
  actual = move(state);
  t.deepEqual(actual, state);

  state = { placed: true, report: { x: 0, y: 0, face: 'SOUTH' } };
  actual = move(state);
  t.deepEqual(actual, state);

  state = { placed: true, report: { x: 0, y: 0, face: 'WEST' } };
  actual = move(state);
  t.deepEqual(actual, state);
  t.end();
});
