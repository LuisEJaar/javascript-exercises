const reverseString = function(str) {
    //get length of string
    let stringLength = str.length;
    //convert old string into an array
    let oldStringArray = str.split("");
    //for loop through length of string + 1
    let stringArray = [];
    for (i=0; i<=stringLength;i++){
        //assign last letter of string to first letter of array, etc.
        stringArray[i] = oldStringArray[stringLength - i];
    }
    //stringArray works but need to convert back to string without commas
    //toString() would have comma separator so .join() used instead
    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
