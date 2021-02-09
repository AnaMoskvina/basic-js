const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
      if(newArr[i] === "--discard-next" && i + 1 < newArr.length) {
        newArr[i + 1] = "to delete";
        newArr.splice(i, 1);
      }
      if(newArr[i] === "--discard-prev" && i - 1 > -1) {
        newArr[i - 1] = "to delete";
        newArr.splice(i - 1, 1);
      }
      if(newArr[i] === "--double-next" && i + 1 < newArr.length && newArr[i + 1] !== "to delete") newArr[i] = newArr [i + 1];
      if(newArr[i] === "--double-prev" && i - 1 > - 1 && newArr[i - 1] !== "to delete") newArr[i] = newArr[i - 1];
  }

  let filter = function (item) {
    if(item === "--discard-next" || item === "--discard-prev" || item === "--double-next" || item === "--double-prev" || item === "to delete") return false;
    return true;
  }
  
  return newArr.filter(item => filter(item));
};
