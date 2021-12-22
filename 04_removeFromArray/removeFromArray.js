const removeFromArray = function() {
    //Turn arguments into array
    let argumentsArray = Array.from(arguments);
    //Pull initial array from arguments array
    let oldArray = argumentsArray[0];
    //Initialize array to return
    let removedArray = [];
     //Define a counter for indices in new array
     let i = 0;
    //Loop through input array to search for items to remove
    oldArray.forEach(function(item) {
        //set a boolean on if we find item to remove
        let isMatch = false;
        //loops through the provided arguments for each given array index
        for (a = 1; a < argumentsArray.length; a++) {
            //defines removal as current argument
            let removal = argumentsArray[a];
            //if current argument matches given item say it matches
            if (item === removal) {
                isMatch = true;
            }
        }
        //if none of the arguments match a given array index then we add it
        if (isMatch === false) {
          removedArray[i] = item;
                i += 1; 
        }
    }) 
    //Feed to checker
    return removedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
