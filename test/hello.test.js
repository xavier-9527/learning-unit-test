const hello = require('../app/utils/hello');
const assert = require('assert');
// import hello from '../app/utils/hello';
// import assert from 'assert';

describe('First Test Demo', () => {
  it('result should be 2', () => {
    const data = hello(1);
    assert.equal(data, 2);
  });

  it('result should be 2', () => {
    const data = hello(2);
    assert.equal(data, 3);
  });
});
