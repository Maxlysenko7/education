




//Найти сумму четных чисел и их количество в диапазоне от 1 до 99
//  let sum = 0;
//  for (let i=0; i<100; i += 2){
//   sum = sum + i
//   }
//   console.log(sum)

//Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

   let number = 15;
   let result

function name() { 
   for (let i = 2; i < number; i++) {
       if (number % i == 0) {
           return true 
       } return false
   }
   console.log(result);
}
   name()


// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
//  function sqrtNatural(x){
//     let sqrt = 0;
//      for (let i = 0; i < x; i++) {
//      if (i * i <= x) sqrt = i;
//    }
//      return sqrt;
//    }
//    console.log(sqrtNatural(25))

//    function sqrtNatural(x){
//        let end = x;
//        let start = 0;
//        let mid = 0;

//        while (end - start > 1) { 
//        mid = parseInt((start+end)/2);
//        if (mid * mid <= x ) { start = mid;
//        } else end = mid
//        }

//        return start;
//    }
//    console.log(sqrtNatural(25));





//Вычислить факториал числа n. n! = 1*2*…*n-1*n;

//  function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//  }
//  console.log(factorial(3))

// function factorial(n) {
//     let num = 1;

//     for (let i = 1; i <= n; i++) { 
//     num *= i 
// } return num; 
// }
// console.log(factorial(5));

//Посчитать сумму цифр заданного числа	
//  function summ(x) {
//   let num = 0;
//   let result = 0;

//   while(x > 0) {
//     num = x % 10;
//     result += num;
//     x = parseInt(x / 10);
//   }

//   return result;
// }

// console.log(summ(55))

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

// function reverseNumber(x) {
//     let num = 0;
//     let result = 0;
  
//     while(x > 0) {
//       num = x % 10;
//       result = result * 10 + num;
//       x = parseInt(x / 10);
//     }
  
//     return result;
//   }


