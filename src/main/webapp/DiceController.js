/**
 * @author Isak Aasemoen Aardal
 */

alert("DiceController loaded");

import Dice from "./Dice.js"

export default class {
  _root = "root";
  _in = document.getElementById(this._root).querySelector("data-dicebutton");
  _out;

  constructor(root = "root"){
    this._root = root;
    this.run = this.run.bind(this);
  }

  run(){
    alert("Running");
    this.rollDice()
  }

  rollDice(){
    alert("rolling");
  }
}