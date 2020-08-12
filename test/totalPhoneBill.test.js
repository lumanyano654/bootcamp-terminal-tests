var assert = require("assert")
var totalPhoneBill = require("../totalPhoneBill")

describe("the totalPhoneBill function", function() {
    it("should return sms total phone bill", function() {


      assert.equal("R0.85", totalPhoneBill('sms'))
    })
    it("should return call total phone bill", function() {


      assert.equal("R2.75", totalPhoneBill('call'))
    })
  })