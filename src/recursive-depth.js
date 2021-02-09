const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  counter = 1;

  calculateDepth(arr) {
    let localCounter = 0;

    arr.forEach(item => {
      if(Array.isArray(item)) localCounter++;
    })

    if(localCounter === 0)  {
      const result = this.counter;
      this.counter = 1;
      return result;
    }
   
    this.counter++;
    return this.calculateDepth(arr.flat());
  }

};
