const palindromes = function (textEntry) {
    let length = textEntry.length;
    let stringEnd = length-1;
    if (length % 2 === 0){ //if its even
        for (i=0; i <= length/2; i++) {
            //if end is equal to beginning and so on
            if (textEntry.charAt(i) === textEntry.charAt(stringEnd-i)){
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
            if (textEntry.charAt(i) === textEntry.charAt(stringEnd-i)){
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
