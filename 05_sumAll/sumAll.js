const sumAll = function(entry1,entry2) {
    
    //initialize return
    let total = 0;

    //define loops needed
    let gap = entry2 - entry1;

    //loop to add each
    for (i=0; i<= gap; i++) {
      if (i === 0){
        total = entry1;
        
      } else {
        total = total + (entry1 + i);
        
      }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
