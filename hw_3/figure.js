// Фигура 1
//  let n = 7;
//  let p = "";

//  for(let i = 0; i < n; i++) { 
//    for(let k = 0; k < n; k++) { 
//      p += "* ";
//    }
//     p += "\n";
//  }
//  console.log(p);

// i = внешний цикл
// k = внутренний цикл

// Фигура 2
// let n = 8;
// let p = '';
// for(let i = 0; i < n; i++) { 
//     for(let k = 0; k < n; k++) {
//       if(k === 0 || k === n - 1) {
//         p += "* ";
//       }
//       else {
//         if(k === 0 || k === n - 1) {
//           p += "*       ";
//         }
//         else {
//           p += " ";
//         }
//       }
//     }
//     p += "\n";
//   }
//   console.log(p);


//Фигура 3
// let n = 7;
// let p = "";

// for (let i = 1; i <= n; i++) {
//   for (let k = 0; k < i; k++) {
//     if(i === n) {
//       p += "*";
//     }
//     else {
//       if (k == 0 || k == i - 1) {
//         p += "*";
//       }
//       else {
//         p += " ";
//       }
//     }
//   }
//   p += "\n";
// }
// console.log(p);

// Фигура 4

//  let n = 7;
//  let p = "";

//  for (let i = 1; i <= n; i++) {
//    for (let k = 0; k < i; k++) {
//      if(i === n) {
//        p += "*";
//      }
//      else {
//        if (k == 0 || k == i - 1) {
//          p += "*";
//        }
//        else {
//          p += " ";
//        }
//      }
//    }
//    p += "\n";
//  }
//  console.log(p);

// Фигура 5
// function figureFive(n) { 
// let result = '';
// for (let i = 0; i < n; i++){
//     result += " ";
//     for (let k = 0; k < n - 1; k++){
//         if (i === n - 1 || k === n - (i + 1)){
//             result += " * ";
//         } else result += '   ';
//     }
//     result += '*\n';
// }
// return result;
// }
// console.log(figureFive(7))

//Фигура 8

// Фигура 9
 let n = 4;
 let p = "";

 for (let i = 1; i <= n; i++) {
   for (let k = 1; k <= n - i; k++) {
     p += " ";
   }
   for (let k = 0; k < 2 * i - 1; k++) {
     if(i === 1 || i === n) {
       p += "*";
     }
     else {
       if(k === 0 || k === 2 * i - 2) {
         p += "*";
       }
       else {
         p += " ";
       }
     }
   }
   p += "\n";
 }
 console.log(p);

