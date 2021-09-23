const assert = require('chai').assert;

const app = require('../app');

const cal = require('../calculator');

describe('App', function() {
    it('hello should return hello', function() {
        let actual = app();
        assert.equal(actual, 'hello');
    })
    it('hello should return string type', function() {
        let actual = app();
        assert.typeOf(actual, 'string');
    })
    it('add should return 5', function() {
        let actual = cal.add(2, 3);
        assert.equal(actual, 5);
    })
    it('sub should return 1', function() {
        let actual = cal.sub(4, 3);
        assert.equal(actual, 1);
    })
})