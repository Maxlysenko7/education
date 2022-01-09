const {getInputValue, addListener, setHTMLValue} = require('./utils');

const resultNumber = [];

let resultCount = 1;


function randomNumber(){
  const minValue = Number.parseInt(getInputValue('min'), 10);

  const maxValue = Number.parseInt(getInputValue('max'),10);

  if (maxValue < minValue){
    setHTMLValue('genNumber','Ошибка! Минимальное число больше максимального! Введите числа заново!');
    return
  }

  const result = Math.round(minValue - 0.5 + Math.random() * (maxValue - minValue + 1));
  console.log(result)

  if (resultNumber.length === maxValue - 1){

    document.querySelector('#commit').disabled = true;

    setHTMLValue('genNumber', 'Вы использовали все числа!' )

    return
    
  }

  if (resultNumber.includes(result)){
    randomNumber();
    return
  }

  if (resultCount === 1) {
    setHTMLValue('genNumber','Generated number: ')
  }

  genNumber.textContent += result + ' ';

  resultNumber.push(result)
  resultCount++;

}

function reset() {
  document.querySelector('#commit').disabled = false

  document.getElementById('min').value = '';

  document.getElementById('max').value = '';

  document.getElementById('genNumber').textContent = 'Generated number: ';

  resultNumber.length = 0;

}

addListener('reset','click', reset);
addListener('commit','click', randomNumber);