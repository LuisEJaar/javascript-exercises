const sumAll = function(entry1,entry2) {
    
    //initialize return
    let total = 0;

    //test for negative numbers
    if (entry1 < 0 || entry2 < 0) {
        return 'ERROR';
    }

    //test if any entry is not a number
    if (typeof entry1 !== 'number' || typeof entry2 !== 'number') {
        return 'ERROR';
      }

    //switch entries if 2nd is larger
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
