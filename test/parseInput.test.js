const test = require('tape');
const parseInput = require('../utils/parseInput');

test('should return all words and numbers from a string', function(t) {
  const testInput = 'trip 21`,44.!drop';
  const result = parseInput(testInput);
  const expected = ['trip', '21', '44', 'drop'];
  t.deepEqual(result, expected);
  t.end();
});

test('should parse a valid PLACE command', function(t) {
  const testInput = 'PLACE 3,3,SOUTH';
  const result = parseInput(testInput);
  const expected = ['PLACE', '3', '3', 'SOUTH'];
  t.deepEqual(result, expected);
  t.end();
});

test('should parse all other commands', function(t) {
  let result = parseInput('MOVE');
  let expected = ['MOVE'];
  t.deepEqual(result, expected);

  result = parseInput('LEFT');
  expected = ['LEFT'];
  t.deepEqual(result, expected);

  result = parseInput('RIGHT');
  expected = ['RIGHT'];
  t.deepEqual(result, expected);

  result = parseInput('REPORT');
  expected = ['REPORT'];
  t.deepEqual(result, expected);
  t.end();
});
