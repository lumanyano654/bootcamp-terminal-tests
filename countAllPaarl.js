module.exports = function countAllPaarl(str){
    var differentRegNumber = str.split(', ')
  
    var paarl = []
    for (var y=0;y<differentRegNumber.length;y++){
      console.log(differentRegNumber[y]);
     if (differentRegNumber[y].startsWith('CJ')){
       paarl.push(differentRegNumber[y])
      }
    }
      return paarl;
  
  }