var assert = require("assert")
var countAllPaarl = require("../countAllPaarl")


describe("the countAllPaarl function", function() {
    it("should give out all those from Paarl", function() {
      var regNmbrsFrmPaarl = ["CJ 123", "CJ 7523"]
        assert.deepEqual(regNmbrsFrmPaarl, countAllPaarl('CJ 123, CA 456, CJ 7523'))
  
    })

    it("should pass for CJ 5436-74", function() {
        var regNmbrsFrmPaarl = ["CJ 5436-74"]
        
        assert.deepEqual(regNmbrsFrmPaarl, countAllPaarl('CA 453, CJ 5436-74, CY 7864'))
  
    })

    it("should pass for CJ 874599", function() {
        var regNmbrsFrmPaarl = ["CJ 123-43", "CJ 2634-6334", "CJ 235-2367", "CJ 654-3784"]
      
        assert.deepEqual(regNmbrsFrmPaarl, countAllPaarl("CJ 123-43, CJ 2634-6334, CJ 235-2367, CJ 654-3784, CA 23466, CY 7635" ))
  
    })

    

  })