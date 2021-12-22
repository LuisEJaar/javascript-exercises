const sumAll = function(entry1,entry2) {
    
    //initialize return
    let total = 0;

    if (entry1 < 0 || entry2 < 0) {
        return 'ERROR';
    }

    //logic to switch entries
    if (entry1 > entry2) {
        temp = entry1;
        entry1 = entry2;
        entry2 = temp;
    }   

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
