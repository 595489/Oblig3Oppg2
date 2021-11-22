class DiceController
    _root: "root"
    _inputElement: document.getElementById(_root).querySelector("data-dicebutton")
    _outputElement: "no value"

    constructor: (root = "root") ->
        @_root = root
        @run = @run.bind(@)
        @rollDice = @rollDice.bind(@)
    
    run: ->
        alert 'Running'
        btRef = document.getElementById(@_root).querySelector("data-dicebutton")
        btRef.addEventListener("click", @rollDice)
        diceOutput = document.getElementById(@_root).querySelector("data-dicebutton")
        @diceOutput.innerHtml = @_outputElement


    rollDice: ->
        alert 'Rolling Dice'
        Dice.roll
        @_outputElement = Dice.getValue()