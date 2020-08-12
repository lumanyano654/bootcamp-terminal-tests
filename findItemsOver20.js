module.exports= function findItemsOver20(itemList){
    var highQty = [];
  
    for (var x=0;x<itemList.length;x++){
       if(itemList[x].qty > 20){
      highQty.push(itemList[x])
    }
  
    }
    return highQty
  }
  