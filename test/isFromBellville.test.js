var assert = require ("assert")
var isFromBellville = require("../isFromBellville")


describe('The isFromBellville function ', function (){
  
    it("should return true for CY 123-223" , function(){
        
        assert.equal(true ,isFromBellville("CY 123-223"))
    })
});