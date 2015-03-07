"use strict";

require('../index.js');

var assert = require('chai').assert;

describe('basic', function(){

    it('should add Set, Promise, Object.assign, Array.prototype.find and Number.isNaN to the ECMAScript environment', function(){
        assert.equal(typeof Set, "function");
        assert.equal(typeof Promise, "function");
        assert.equal(typeof Object.assign, "function");
        assert.equal(typeof Array.prototype.find, "function");
        assert.equal(typeof Number.isNaN, "function");
    });

});