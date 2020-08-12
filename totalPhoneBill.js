module.exports = function totalPhoneBill(callsMade){
    var calls = callsMade.split(', ');
    console.log(calls);
    var total = 0
    for (var x=0;x<calls.length;x++){
      var c = calls[x].trim();
      if (c.startsWith("sms")){
        total += 0.85
      }
     if (c.startsWith("call")){
        total += 2.75
      }
  
  
    }
      return "R"+ total.toFixed(2)
  
  }