/**
 * @author Isak Aasemoen Aardal
 */

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
