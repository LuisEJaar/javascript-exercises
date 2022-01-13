const palindromes = function (textEntry) {
    textEntry = textEntry.split(" ").join("");
    textEntry = textEntry.toLowerCase();
    let startingLength = textEntry.length; 
    let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    let period = '.';
    for (i=0; i<=startingLength;i++) {
        if (pattern.test(textEntry.charAt(i)) === true || textEntry.charAt(i) === period) {
            textEntry = textEntry.split(textEntry.charAt(i)).join("");  
            console.log(textEntry);
        };
    };
    
    let length = textEntry.length;
    let arrayEnd = length-1;
    if (length % 2 === 0){ //if its even
        for (i=0; i <= length/2; i++) {
            //if end is equal to beginning and so on
            if (textEntry.charAt(i) === textEntry.charAt(arrayEnd-i)){
                continue;
            } else {
                return false;
            };
        };
        return true; 
    } else {
        //this one needs to stop before the middle
        for (i=0; i <= (length/2)-1; i++) {
            //if end is equal to beginning and so on
            if (textEntry.charAt(i) === textEntry.charAt(arrayEnd-i)){
                continue;
            } else {
                return false;
            };
        }; 
        return true;
    };
};

// Do not edit below this line
module.exports = palindromes;
