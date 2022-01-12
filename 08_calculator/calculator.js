const add = function(input1, input2) {
	let addition = Number(input1) + Number(input2); 
  return addition;
};

const subtract = function(input1, input2) {
  let subtraction = Number(input1) - Number(input2);
  return subtraction;
};

const sum = function(array) {
	let length = array.length;
  console.log(array.length);
  let total = 0;
  if (length === 0){
    return total;
  } else {
    for (i=0; i < length; i++){
      total += array[i]; 
      if (i === length - 1){
        return total;
      };
    };
  };
};

const multiply = function(array) {
	let length = array.length;
  if (length === 0){
    let total = 0;
    return total;
  } else {
    let total = 1;
    for (i=0; i < length; i++){
      total = total * array[i]; 
      if (i === length - 1){
        return total;
      };
    };
  };
};

const power = function(input1,input2) {
  let answer = Number(input1) ** Number(input2);
  return answer;
};

const factorial = function(input) {
  let length = input;
  let answer = 1;
  if (input === 0) {
    return 1;
  } else {for (i = 1; i <= length; i++) {
    answer = answer * i;
    console.log(i);
    if (i === length) {
    return answer;
    };
  };};
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
