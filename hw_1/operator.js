Если а – четное посчитать а*б, иначе а+б
function getMultiplyOrSumm(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
      return false;
    }
  if (a % 2 === 0) {
    return a * b;
  } else return a + b;
}

getMultiplyOrSumm();

Определить какой четверти принадлежит точка с координатами (х,у)
 function koordinat(){
     let point ;
      let x = -2;
      let y = 1;
     if(x>0 & y>0){
      point="точка находится в первой четверти"; }
     if(x<0 & y>0) {
      point="точка находится во второй четверти";}
     if(x<0 & y<0) {
      point="точка находится в третьей четверти";}
     if(x>0 & y<0) {
      point="точка находится в четвертой четверти";}
      console.log(point);
     }
     koordinat();
    

Найти суммы только положительных из трех чисел
let num = [-1, 7, 7];
let result = 0;
for (let i = 0; i < num.length; i++) {
 if (num[i] > 0) {
     result += num[i];
     }
 }

 console.log(result);

let a = (3 * 5 * 7);
let b = (3 + 5 + 7);
let summ = 0;

function getMultiplyOrSumm(){ 
if (a > b) {
    return summ += a + 3;
} else {
    return summ += b + 3;
}
}
console.log(getMultiplyOrSumm())

function calculateMaxPlus(a, b, c) { 
let product = 3 * 5 * 7;

let summ = 3 + 5 + 7;

return product > summ ? product + 3 : summ + 3;
}
console.log(calculateMaxPlus())

Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function rating() {
    let rate = 20
    let result;
    if (rate >= 0 && rate <= 19) {
        result = 'Оценка ученика F';
    }
    if (rate >= 20 && rate <= 39 ) {
        result = 'Оценка ученика E'; 
    }
    if (rate >= 40 && rate <= 59) {
        result = 'Оценка ученика D';
    }
    if (rate >= 60 && rate <= 74) {
        result = 'Оценка ученика C';
    }
    if (rate >= 75 && rate <= 89) {
        result = 'Оценка ученика B';
    }
    if (rate >= 90 && rate <= 99) {
        result = 'Оценка ученика A';
    }
    console.log(result);
}

rating();