const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log();
  if(!date) return `Unable to determine the time of year!`;
  let month = date.getMonth();
  if (!date instanceof Date || date.hasOwnProperty("getMonth")) throw new Error(`Invalid input`);
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "fall";
  if (month === 11 || month === 0 || month === 1) return "winter";
};
