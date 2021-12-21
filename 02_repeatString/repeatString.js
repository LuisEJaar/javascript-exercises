const repeatString = function(string,num) {
   if(num>=1){ 
        let answer = "";
        for (i=0; i<num;i++) {
            answer += string;
        }
        return answer;

   }    else if (num === 0) {
        return "";
   }    else {
        return 'ERROR';
   }
};


// Do not edit below this line
module.exports = repeatString;
