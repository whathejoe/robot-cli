const test = require('tape');
const validator = require('../question/validator');

test('should reject invalid commands', function(t) {
  const invalidResult = 'Invalid command';
  let result = validator('MRVE');
  t.equal(result, invalidResult);

  result = validator('STAND');
  t.equal(result, invalidResult);

  result = validator('PLACE 1,5,SOUTH');
  t.equal(result, invalidResult);

  result = validator('PLACE -1,3,NORTH');
  t.equal(result, invalidResult);

  result = validator('RGHT');
  t.equal(result, invalidResult);

  result = validator('X');
  t.equal(result, invalidResult);

  result = validator('123131');
  t.equal(result, invalidResult);
  t.end();
});

test('should accept valid commands', function(t) {
  let result = validator('PLACE 1,2,EAST');
  t.ok(result);

  result = validator('RIGHT');
  t.ok(result);

  result = validator('LEFT');
  t.ok(result);

  result = validator('MOVE');
  t.ok(result);

  result = validator('REPORT');
  t.ok(result);

  t.end();
});
