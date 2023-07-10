// const hello = require('../app/utils/hello');
// const assert = require('assert');
import hello from '../app/utils/hello';

describe('First Test Demo', () => {
  it('result should be 2', () => {
    const data = hello(1);
    expect(data).toBe(2);
  });

  it('result should be 3', () => {
    const data = hello(2);
    expect(data).toBe(3);
  });
});
