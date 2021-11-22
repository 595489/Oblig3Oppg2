import DiceController from "./DiceController.js"
alert("init loaded");
const controller = new DiceController("root");
// document.addEventListener("DOMContentLoaded", controller.run(), true);
window.onload = controller.run();