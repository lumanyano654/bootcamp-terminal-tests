var assert = require("assert")
var countAllPaarl = require("../countAllPaarl")


describe("the countAllPaarl function", function() {
    it("should give out all those from Paarl", function() {
      
        assert.equal('CJ', countAllPaarl('CJ'))
  
    })

    it("should pass for CJ 5436-74", function() {
      
        assert.equal('CJ 5436-74', countAllPaarl('CJ 5436-74'))
  
    })

    it("should pass for CJ 874599", function() {
      
        assert.equal('CJ 874599', countAllPaarl('CJ 874599'))
  
    })

    

  })