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


const power = function() {
	
};

const factorial = function() {
	
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
