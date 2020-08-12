module.exports = function countAllFromTown(regNumber, place){
    var town = [];
    var regNumbers = regNumber.split(',');
   // console.log(regNumbers);
      for (var x=0;x<regNumbers.length;x++){
  
        var t = regNumbers[x].trim()
         if (t.startsWith(place)){
             town.push(t);
  //         console.log(town)
        }
      }
    return town.length
  
  }