const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    let newItem = `( ${value} )`;
    this.arr.push(newItem);
    return this;
  },
  removeLink(position) {
    if(!position || !Number.isFinite(position) || position > this.arr.length || position < 0 + 1) {
      this.arr = [];
      throw new Error("Invalid input");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if(this.arr.length <= 1) return this;
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let string = this.arr.join("~~");
    this.arr = [];
    return string;
  }
};

module.exports = chainMaker;
