const {setHTMLValue,getInputValue, attemptsFunction} = require('./utils');

function settings(state){

const inputMin = Number.parseInt(getInputValue('inputFrom'),10)

const inputMax = Number.parseInt(getInputValue('inputTo'),10)

let attempts =  Number.parseInt(getInputValue('guesses'), 10);

state.attempts = attempts;

console.log(inputMin)
console.log(inputMax)
console.log(state.attempts)


    if(inputMin > inputMax){
        setHTMLValue('userNumber', 'Сумма минимального числа не может быть выше максимального')
    } 

    if (!Number.isInteger(inputMin) || !Number.isInteger(inputMax) || !Number.isInteger(attempts)) {
        setHTMLValue('userNumber','Принимаются только целые числа!')
    }

    if (inputMin < 0 || inputMax < 0 || attempts < 0) {
        setHTMLValue('userNumber','Отрицательные значения в диапазоне не допустимы!')
    }
    
    if (attempts > 15 || attempts < 1) {
        setHTMLValue('userNumber','Диапазон попыток должен быть от 1 до 15!')
    }

    if (inputMax > 200){
        setHTMLValue('userNumber',"Максимальное число не может быть больше 200")
    }

    number = Math.round(Math.random() * (inputMax - inputMin))
    console.log(number)
    
}

function gameProcess(state){
    let userNumber = +document.querySelector('#game__number').value
    
    console.log(userNumber)
    console.log(state.attempts)
    attemptsFunction
    if (userNumber > number){
        setHTMLValue ('userNumber',`Ваше число больше загаданного! У вас осталось ${state.attempts} попыток`)

    } else if (userNumber < number) {
        setHTMLValue ('userNumber',`Ваше число меньше загаданного! У вас осталось ${state.attempts} попыток`)

    } else if (userNumber === number){
        setHTMLValue ('userNumber',`Поздравляем! Вы угадали число!`)

        generate.remove()

    }if (state.attempts === 0){
        setHTMLValue ('userNumber',`Вы проиграли! Вы использовали все свои попытки! Загаданное число было ${number}`)
        generate.remove();
        
    } return

}

addListener('exit','click', close);

function close(){
    input.remove()
    message("Может передумаешь?")
    generate.disabled = true;
    return
}

function init() { 
    const state = {
        randomNumber: 0,
        attempts: 5,
        attemptsTwo: 0,
        rangeMin: 0,
        rangeMax: 100,
        previousGuess: 0,
    }
    
        addListener('applyBtn', 'click' , settings.bind(null, state));
}



document.addEventListener('DOMContentLoaded', function(){
    init();
})

addListener('generate','click', gameProcess)