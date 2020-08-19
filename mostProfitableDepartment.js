module.exports = function mostProfitableDepartment(department1){
    var map = {};
    var depName = '';
     for (var x=0;x<department1.length;x++){
       var myDepartment = department1[x].department
        if(map[myDepartment] === undefined){
           map[myDepartment] = 0;
        }
            map[myDepartment] += department1[x].sales
     }
    
    
      
      var greaterSales = 0;
    
      for( let x in map){
         if(map[x] > greaterSales){
            greaterSales = map[x]
            depName = x
    
         }
    
      }return depName
    }