const ftoc = function(tempF) {
  tempC = (tempF - 32) * 5/9;
  if (tempC % 1 === 0){
    return tempC;
  } else {
  return parseFloat(tempC.toFixed(1));
  }
};

const ctof = function(tempC) {
  tempF = (tempC * 9/5) + 32;
  if (tempF % 1 === 0){
    return tempF;
  } else {
  return parseFloat(tempF.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
