const fibonacci = function(number) {
    let answer = [1,1];
    for (i=2; i<=(number);i++) {
      answer[i] = answer[i-1] + answer[i-2];
      console.log(answer[i]);
      if (i === (number-1)) {
        return answer[i]
      };
    };
};

// Do not edit below this line
module.exports = fibonacci;
