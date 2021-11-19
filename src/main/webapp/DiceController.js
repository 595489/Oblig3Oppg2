/**
 * @author Isak Aasemoen Aardal
 */

import Dice from "./Dice.js"

export default class{

    _root = "root";
    _inputElement = document.getElementById(_root).querySelector("data-dicebutton");
    _outputElement;

    constructor(root) {
        this._root = root
        this.run = this.run.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }

    run() {
        alert("lmao");
        btRef = document.getElementById(this._root).querySelector("data-dicebutton");
        btRef.addEventListener("click", this.rollDice);
        this.rollDice = this.rollDice.bind(this);
        diceoutput = document.getElementById(this._root).querySelector("data-diceoutput");
        this.diceoutput.innerHtml = _outputElement;
    }

    rollDice() {
        Dice.roll();
        this._outputElement = Dice.getValue();
    }
}
