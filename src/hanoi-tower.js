const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let steps = 2 ** disksNumber - 1;
  let time = Math.floor(steps / turnsSpeed * 3600);
  return { turns: steps, seconds: time}
};
