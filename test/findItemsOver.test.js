var assert = require("assert")
var findItemsOver = require("../findItemsOver")

describe("the findItemsOver function ", function(){
    it("should return products that have a higher quantity than the treshold", function(){

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        assert.deepEqual(results, findItemsOver(itemList, 15))
    })
})