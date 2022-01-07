//Составьте алгоритм, который считает, сколько времени вам нужно на
//приготовление яиц.


// function getCookingTime(eggsAmount){
//     let result;
//     const time = 5;
    
//     if (eggsAmount >= 1 && eggsAmount <= 5 ) {
//         result = time
//     } else if (eggsAmount > 5 && eggsAmount < 10 ) {
//         result = time * 2 
//     } else if (eggsAmount >= 0 && eggsAmount > 100){
//         console.log('Не правильно')
//     }
//     return result

// }
// console.log(getCookingTime(7))

//Task 3

// function getNumber (array) {
//     let result ;
    
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0){
//             result = array[i]
//         }
//     }
//     return result;
//     }
//     console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]))
    // getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13

    // function getNumber (array) {
    //     let result ;
        
    //     for (let i = 0; i < array.length; i++){
    //         if (array[i] % 2 !== 0){
    //             result = array[i]
    //         }
    //     }
    //     return result;
    //     }
    //     console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) 


    // let arr = [{title: 'Some title1'},
    //     {title: 'I like JS'},
    //     {user: 'This obj does not have key title js'},
    //     {title: 'Js - is the best!'}];

    // function findTitle(arr, str) {
    //     let result = [];
    //     for (let i = 0; i < arr.length; i++){
    //         for (let keys in arr[i]) {
    //             if(keys == 'title') { if (arr[i][keys].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
    //                     result.push(arr[i]) 
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //     return result
    // }

    // let arr = [ 1,2,3,4,5,]

    // arr.indexOf(7) = -1


// console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]


function countCharacter(str){
  let result = {};
  str = str.toLowerCase().replace(/[^a-zа-я0-9]+/g)
  for (let char of str){
    result.push(arr[i])
  }
}

console.log(countCharacter(sparrow))


// Задание 5

// function reverse(nums) {
//     let reverse = "";
//     for (let i = String(nums).length - 1; i >= 0; i--) {   
//       reverse += String(nums)[i]; 
//     }
//     return reverse;
//   }
  
//   function Palindrome(num) {
//     if (String(num).length < 2) { 
//       return num + 1
//     }
  
//     for (let i = num + 1; ; i++) {
//       if (String(i) === reverse(i)) {
//         return i
//       }
//     }
//   }
  
//   console.log(Palindrome(123))

