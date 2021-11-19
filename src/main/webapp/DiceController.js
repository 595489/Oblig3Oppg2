/**
 * @author Isak Aasemoen Aardal
 */


class DiceController {

    _root = "root";
    _inputElement = document.getElementById(_root).querySelector("[data-dicebutton]");
    _outputElement;

    constructor(_root) {
        this.run = this.run.bind(this);
    }

    controller() {
        alert("lmao")
        btRef = document.getElementById(this.root).querySelector("*[data-dicebutton]");
        btRef.addEventListener("click", this.rollDice, true);
        this.rollDice = this.rollDice.bind(this);
        diceoutput = document.getElementById(_root).querySelector("data-diceoutput");
        this.diceoutput.innerHtml = _outputElement;
    }

    rollDice() {
        const value = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
        alert("lmao");
        return dice.value = value;

    }
}