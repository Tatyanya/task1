
var moreThatHalfFullfilled = require('./base.js');

const assert = require('assert');

describe('moreThatHalfFullfilled', () => {
  it('should resolve', () => {
    const promisesArr = [
      Promise.resolve(),
      Promise.resolve(),
      Promise.reject(new Error()),
      Promise.resolve(),
    ];

    return moreThatHalfFullfilled(promisesArr)
      .then(() => {
        assert.ok('is resolved');
      })
      .catch(() => {
        assert.fail('should be resolved');
      });

  });
  it('should rejected', () => {
    const promisesArr = [
      Promise.reject(new Error()),
      Promise.reject(new Error()),
      Promise.reject(new Error()),
      Promise.reject(new Error()),
    ];


    return moreThatHalfFullfilled(promisesArr)
      .then(() => {
        assert.fail('should be rejected');
      })
      .catch((error) => {
        assert.ok(true, 'rejected as expected');

      });
  });

  it('should rejected', () => {
    const promisesArr = [
      Promise.reject(new Error()),
      Promise.resolve(),
      Promise.reject(new Error()),
      Promise.resolve(),
    ];

    return moreThatHalfFullfilled(promisesArr)
      .then(() => {
        assert.fail('should be rejected');
      })
      .catch((error) => {
        assert.ok(true, 'rejected as expected');

      });
  });

  it('should rejected', () => {
    const promisesArr = [
      Promise.reject(new Error()),
      Promise.reject(new Error()),
      Promise.resolve(),
      Promise.reject(new Error()),
    ];


    return moreThatHalfFullfilled(promisesArr)
      .then(() => {
        assert.fail('should be rejected');
      })
      .catch((error) => {
        assert.ok(true, 'rejected as expected');

      });
  });


});


