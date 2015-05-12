var CGSize = require('../dist/index.min.js');
var assert = require("assert");

var defaultSizeValues = new CGSize();// 100, 100
var size = new CGSize(50, 20);

describe('CGSize', function(){

    describe('Check default values', function(){
        it('should be width:100 and height:100', function(){
            assert.equal(defaultSizeValues.width, 100);
            assert.equal(defaultSizeValues.height, 100);
        })
    });

    describe('Check that constructor is working properly', function(){
        it('should be width:50 and height:20', function(){
            assert.equal(size.width, 50);
            assert.equal(size.height, 20);
        })
    });

});
