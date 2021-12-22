const leapYears = function(entry) {

    if (entry % 4 !== 0) {

        return false;

    } else if (entry % 100 !== 0) {
        
        return true;

    } else if (entry % 100 === 0 && entry % 400 === 0) {

        return true;

    } else {

        return false;

    } 
};

// Do not edit below this line
module.exports = leapYears;
