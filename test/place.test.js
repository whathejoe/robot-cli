const test = require('tape');
const place = require('../actions/place');

test('should return the new coordinates', function(t) {
  const state = {};
  const testX = 1;
  const testY = 2;
  const testFace = 'WEST';

  const actual = place(state, testX, testY, testFace);
  const expectedReport = { x: testX, y: testY, face: testFace };

  t.deepEqual(actual.report, expectedReport);
  t.end();
});

test('should flag bot as placed', function(t) {
  const state = {};
  const testX = 1;
  const testY = 2;
  const testFace = 'WEST';

  const actual = place(state, testX, testY, testFace);

  t.equal(actual.placed, true);
  t.end();
});

test('should not modify the rest of the state', function(t) {
  const state = { done: false, notDone: true };
  const testX = 1;
  const testY = 2;
  const testFace = 'WEST';

  const actual = place(state, testX, testY, testFace);

  t.equal(actual.done, false);
  t.equal(actual.notDone, true);
  t.end();
});
