function getInputValue(id) {
  const input = document.getElementById(id);
  if(input) {
      return input.value;
  }
  return '';
}

function addListener (id, eventType, callback){
  const node = document.getElementById(id);
  if (node){
      node.addEventListener(eventType, callback);
  }
}

function setHTMLValue(id, value) {
  const node = document.getElementById(id);
  if (node) {
      node.innerHTML = value;
      return true;
  }
  return false;
}

const resultNumber = [];
let resultCount = 1;

addListener('reset','click', reset);
addListener('commit','click', randomNumber);

function randomNumber(){
  const minValue = Number.parseInt(getInputValue('min'),10);

  const maxValue = Number.parseInt(getInputValue('max'),10);

  const commitBtn = document.querySelector('#commit')

  if (maxValue < minValue){
    setHTMLValue('genNumber','Ошибка! Минимальное число больше максимального! Введите числа заново!');
    return
  }

  const result = Math.round(minValue - 0.5 + Math.random() * (maxValue - minValue + 1));
  console.log(result)

  if (resultNumber.length === maxValue - 1){
    commitBtn.disabled = true;
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
  const commitBtn = document.querySelector('#commit')
  minValue = '';
  maxValue = '';
  genNumber.textContent = 'Generated number: ';
  resultNumber.length = 0;
  commitBtn.disabled = false
}
