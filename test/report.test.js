const test = require('tape');
const report = require('../actions/report');

test('should flag the state as done', function(t) {
  const state = { done: false };
  const actual = report(state);
  t.deepEqual(actual.done, true);
  t.end();
});
