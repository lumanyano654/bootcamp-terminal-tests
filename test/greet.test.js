var assert = require("assert")
var greet = require("../greet")

describe('The greet function' ,function(){

    it('should greet a name whenever a name is entered', function(){
        
        assert.equal("hello, Lumanyano" , greet("Lumanyano"))
    });    

});