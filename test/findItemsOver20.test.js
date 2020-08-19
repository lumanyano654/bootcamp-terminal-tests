var assert = require("assert")
var findItemsOver20 = require("../findItemsOver20") 

describe("the findItemsOver20 function", function() {
    it("should give out those with quantity over 20", function() {

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

      
        var functionResult = findItemsOver20(itemList)
       
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
      assert.deepEqual(results, functionResult)
    })

    it("should give out those with quantity over 20", function() {

      var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 3},
          {name : 'bananas', qty : 4},
          {name : 'apples', qty : 3},
      ];

    
      var functionResult = findItemsOver20(itemList)
     
      var results = [];
      
    assert.deepEqual(results, functionResult)
  })
  })