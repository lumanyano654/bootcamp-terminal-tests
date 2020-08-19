var assert = require("assert")
var countAllFromTown = require("../countAllFromTown")

describe("the countAllFromTown function", function () {
    it("should return all those from town", function () {
     
      var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
      
      assert.equal(3, fromStellies)

    })

    it("should return all those not from town", function () {
     
      var fromStellies = countAllFromTown('CY 567,CL 345, CJ 456',"CY");
      
      assert.equal(1, fromStellies)
       
    })

    it("should return all those not from town", function () {
     
      var fromStellies = countAllFromTown('CY 567,CL 345, CJ 456',"CA");
      
      assert.equal(0, fromStellies)
       
    })
  })