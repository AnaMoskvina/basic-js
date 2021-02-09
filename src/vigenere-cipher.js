const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
  if (!message || !key) throw new Error(`invalid input`);
  const keyLen = key.length;
  let keyStr = "";
  message = message.toUpperCase();
  let result = "";
  
  for (let i = 0; i < message.length; i++) {
    keyStr += key[i % keyLen].toUpperCase();
  }
  
  for (let j = 0; j < message.length; j++) {
    const mesCode = message[j].charCodeAt(0);
    const keyCode = keyStr[j].charCodeAt(0);
    if(mesCode >= 65 && mesCode <= 90) {      
      result += String.fromCharCode(65 + (mesCode + keyCode) % 26);
    } else {
      result += message[j];
      keyStr = keyStr.replace(keyStr[j], " ".concat(keyStr[j]));
    }
  }

  if(!this.type) return result.split("").reverse().join("");
  return result;
}

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error(`invalid input`);
    const keyLen = key.length;
    let keyStr = "";
    encryptedMessage = encryptedMessage.toUpperCase();
    let result = "";
    
    for (let i = 0; i < encryptedMessage.length; i++) {
      keyStr += key[i % keyLen].toUpperCase();
    }
  
    for (let j = 0; j < encryptedMessage.length; j++) {
      const mesCode = encryptedMessage[j].charCodeAt(0);
      const keyCode = keyStr[j].charCodeAt(0);
      if(mesCode >= 65 && mesCode <= 90) {
        if(mesCode - keyCode < 0) result += String.fromCharCode(91 + (mesCode - keyCode) % 26);
        else result += String.fromCharCode(65 + (mesCode - keyCode) % 26);
      } else {
        result += encryptedMessage[j];
        keyStr = keyStr.replace(keyStr[j], " ".concat(keyStr[j]));
      }
    }
  
    if(!this.type) return result.split("").reverse().join("");
    return result;
  }
}

// let machine = new VigenereCipheringMachine();
// machine.encrypt("attackatdawn", "lemon");

module.exports = VigenereCipheringMachine;
