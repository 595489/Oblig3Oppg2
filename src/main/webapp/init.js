import DiceController from "./DiceController.js"
const controller = new DiceController("root");
// document.addEventListener("DOMContentLoaded", controller.run(), true);
window.onload = controller.run();