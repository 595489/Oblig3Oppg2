/**
 * @author Isak Aasemoen Aardal
 */

alert("Dice loaded");

export default class {
    value;

    constructor(){

    }

    roll(){
        this.value = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
        alert("lmao");
    }

    getValue(){
        return this.value;
    }
}

// Generated by CoffeeScript 2.4.1
// (function() {
//     var Dice;
  
//     Dice = (function() {
//       var value;
  
//       class Dice {
//         roll() {
//           return this.value = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
//         }
  
//         getValue() {
//           return this.value;
//         }
  
//       };
  
//       value = "no value";
  
//       return Dice;
  
//     }).call(this);
  
//   }).call(this);