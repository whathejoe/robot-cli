const test = require('tape');
const sinon = require('sinon');
const Actions = require('../actions');
const Utils = require('../utils');
const { getNewState } = require('../state');

function setup(t) {
  test('setup', function(t) {
    sinon.stub(Actions, 'place');
    sinon.stub(Actions, 'move');
    sinon.stub(Actions, 'turn');
    sinon.stub(Actions, 'report');
    sinon.stub(Utils, 'parseInput');
    t.end();
  });
}

function teardown(t) {
  test('teardown', function(t) {
    Actions.place.restore();
    Actions.move.restore();
    Actions.turn.restore();
    Actions.report.restore();
    Utils.parseInput.restore();
    t.end();
  });
}

setup(test);
test('should handle the PLACE command', function(t) {
  const expected = { placed: true, report: { x: 2, y: 1, face: 'EAST' } };
  Utils.parseInput.returns(['PLACE', '2', '1', 'EAST']);
  Actions.place.returns(expected);

  const result = getNewState({});
  t.deepEqual(result, expected);
  t.end();
});
teardown(test);

setup(test);
test('should handle the MOVE command', function(t) {
  const expected = { placed: true, report: { x: 2, y: 1, face: 'EAST' } };
  Utils.parseInput.returns(['MOVE']);
  Actions.place.returns(expected);

  const state = { placed: true, report: { x: 1, y: 1, face: 'EAST' } };
  const result = getNewState(state);
  t.deepEqual(result, expected);
  t.end();
});
teardown(test);

setup(test);
test('should handle the LEFT and RIGHT commands', function(t) {
  const state = { placed: true, report: { x: 1, y: 1, face: 'EAST' } };

  let expected = { placed: true, report: { x: 1, y: 1, face: 'SOUTH' } };
  Actions.turn.returns(expected);
  Utils.parseInput.returns(['RIGHT']);
  let result = getNewState(state);
  t.deepEqual(result, expected);

  expected = { placed: true, report: { x: 1, y: 1, face: 'NORTH' } };
  Actions.turn.returns(expected);
  Utils.parseInput.returns(['LEFT']);
  result = getNewState(state);
  t.deepEqual(result, expected);

  t.end();
});
teardown(test);

setup(test);
test('should handle the REPORT command', function(t) {
  const expected = { done: true };
  Utils.parseInput.returns(['REPORT']);
  Actions.place.returns(expected);

  const result = getNewState({});
  t.deepEqual(result, expected);
  t.end();
});
teardown(test);

setup(test);
test('should return the default state if no state is passed', function(t) {
  const expected = { done: false, placed: false, report: undefined };
  Utils.parseInput.returns(['NO ACTION']);

  const result = getNewState();
  t.deepEqual(result, expected);
  t.end();
});
teardown(test);

setup(test);
test('should return the existing state if command is invalid', function(t) {
  const state = { try: 1, point: 4 };
  Utils.parseInput.returns(['NO ACTION']);

  const result = getNewState(state);
  t.deepEqual(result, state);
  t.end();
});
teardown(test);
