const removeFromArray = function(array,removal) {
    //Define array
    let oldArray = array;

    let removedArray = [];

    //Define a counter

    let i = 0;

    //Loop through array
    oldArray.forEach(function(item) {
        
        if (item !== removal) {
            removedArray[i] = item;
            i += 1; 
        } 
      })
    
    return removedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
