var assert = require("assert")
var fromWhere = require("../fromWhere")

describe("the fromWhere function", function() {
    it("should tells us from Bellville", function() {
      assert.equal('Bellville', fromWhere('CY'))
    });
    it("should tell us from paarl", function() {
      assert.equal('Paarl', fromWhere('CJ'))
    });
    it("should tell us from Cape Town", function() {
      assert.equal('Cape Town', fromWhere('CA'))
    });
  })
  