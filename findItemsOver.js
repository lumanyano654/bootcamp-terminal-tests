module.exports = function findItemsOver(itemList, treshold){
    var results = [];
    
    for (var y=0;y<itemList.length;y++){
     if (itemList[y].qty > treshold){
        results.push(itemList[y])
     } 
  }return results
  }
  