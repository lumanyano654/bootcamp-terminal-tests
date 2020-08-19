var assert = require("assert")
var findItemsOver = require("../findItemsOver")

describe("the findItemsOver function ", function(){
    it("should return products that have a higher quantity than the treshold when its 15", function(){

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var threshold = 15
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        assert.deepEqual(results, findItemsOver(itemList, threshold))

    })


        it("should return products that have a higher quantity than the treshold when it 20", function(){

            var itemList = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ];
            var threshold = 20

            var results = [
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
            ];
    
        assert.deepEqual(results, findItemsOver(itemList, threshold))
        })

        it("should return products that have a higher quantity than the treshold when its 30", function(){

            var itemList = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ];
            var threshold = 30

            var results = [
                {name : 'pears', qty : 37},
            
            ];
    
        assert.deepEqual(results, findItemsOver(itemList,threshold ))
        })

    })