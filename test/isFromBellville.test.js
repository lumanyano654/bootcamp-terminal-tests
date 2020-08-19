var assert = require ("assert")
var isFromBellville = require("../isFromBellville")


describe('The isFromBellville function ', function (){
  
    it("should return true for CY 123-223" , function(){
        
        assert.equal(true ,isFromBellville("CY 123-223"))
    })

    it("should return true for CY 435-564" , function(){
        
        assert.equal(true ,isFromBellville("CY 435-564"))
    })

    it("should return false for CJ 435-564" , function(){
        
        assert.equal(false ,isFromBellville("CJ 435-564"))
    })
});