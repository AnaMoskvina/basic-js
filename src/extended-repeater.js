const CustomError = require("../extensions/custom-error");


// options {
//   repeatTimes: 1, // should be int if none = 0
//   separator: String, //(separator), // may not be defined, default = "+"
//   addition: String( //will be added after each repeat),
//   additionRepeatTimes: 1, // should be int if none = 0
//   additionSeparator:'addition separator', // may not be defined, default = "|"
// }

// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) =>
//  'STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS'
//    str   add  as add  as  add sep str   add  as add as  add  sep str   add  as  add as  add


module.exports = function repeater(str, options) {

  let string = ``;

  if(!options.repeatTimes) options.repeatTimes = 1;

  if (options.hasOwnProperty("additionRepeatTimes") && !options.additionRepeatTimes) options.additionRepeatTimes = 1;
  else if(!options.additionRepeatTimes) options.additionRepeatTimes = 0;
  

  for (let i = 0; i < options.repeatTimes; i++) {
    string += str;
    if(options.additionRepeatTimes) {
      for(let j = 0; j < options.additionRepeatTimes; j++){
        string += `${String(options.addition) ? String(options.addition) : ""}`;
         if(j < options.additionRepeatTimes - 1) {
          string += `${options.additionSeparator ? String(options.additionSeparator) : "|"}`; 
        }
      }
    }
     if(i < options.repeatTimes - 1) {
      string += `${options.separator ? String(options.separator) : "+"}`;
    }
  }

  return string;
};
  
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })