
function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}


function inputValueSetter(id, value) {
    const input = document.getElementById(id);
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}
function getInputValue(id) {
    const input = document.getElementById(id);
    if(input) {
        return input.value;
    }
    return '';
}

function inputValueGetter(id) {
    const input = document.getElementById(id);
    if (input){
        return input.value;
    }
    return '';
}


function attemptsFunction() {
    attempts--
}

module.exports = {addListener, inputValueGetter, inputValueSetter, setHTMLValue, getInputValue, attemptsFunction}