var assert = require("assert")
var countAllFromTown = require("../countAllFromTown")

describe("the countAllFromTown function", function () {
    it("should return all those from town", function () {
     
      var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');


      assert.equal(3, fromStellies)
    })
  })