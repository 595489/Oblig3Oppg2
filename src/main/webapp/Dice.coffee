class Dice
    value = "no value"

    roll: -> @value = Math.floor(Math.random() * ((6 - 1) + 1) + 1)

    getValue: -> @value
