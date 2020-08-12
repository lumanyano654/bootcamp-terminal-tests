var assert = require("assert")
var yearsAgo = require("../yearsAgo")


describe("the yearsAgo function ", function () {

  it("should give out the years ", function () {
    assert.equal(6, yearsAgo(dt1, dt2))

  })

  it("should give out the years ", function () {
    assert.equal(4, yearsAgo(dt3, dt4))

  })

  it("should give out the years ", function () {
    assert.equal(11, yearsAgo(dt5, dt6))

  })
})