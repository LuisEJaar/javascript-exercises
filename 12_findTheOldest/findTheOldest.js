const findTheOldest = function(object) {
    //sort from oldest to youngest
    let sortedObject = object.sort(function(a,b){
        if (a.yearOfBirth > b.yearOfBirth) {
            return -1;
        }   else {
            return 1;
        };
    });
   
    let oldestPerson = sortedObject[0];
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
