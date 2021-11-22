/**
 * @author Isak Aasemoen Aardal
 */

import Dice from "./Dice.js"

export default class {
  _root = "root";
  _in = document.getElementById(this._root).querySelector("*[data-dicebutton]");
  _out = document.getElementById(this._root).querySelector("*[data-diceoutput]");

  constructor(root) {
    this._root = root;
    this.run = this.run.bind(this);
    this.rollDice = this.rollDice.bind(this);
  }

  run() {
    var btRef = this._in.addEventListener("click", this.rollDice, true);
  }

  rollDice() {
    var dice = new Dice();
    dice.roll();
    var output = this._out.innerHTML = dice.getValue();
  }
}
