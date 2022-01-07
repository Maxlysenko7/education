// work 1
// function tickets(){
//     let price = ([25, 50, 100])
//     let bill = {
//         25: 0,
//         50: 0,
//         100: 0
//     }

//     for (let i = 0; i < price.length; i++){
//         if(price[i] === 25){
//             bill[25]++
//         }
//         if(price[i] === 50){
//             if(bill[25] > 0){ 
//                 bill[50]++
//                 bill[25]--
//             }else return 'NO'
//         }
//         if (price[i] === 100){
//             if(bill[50] > 0 && bill [25] > 0){
//                 bill[100]++
//                 bill[50]--
//                 bill[25]--
//                 return 'YES'
//             }else if( bill[25] >= 3){
//                 bill[25] -3
//                 return 'YES'
//             } else return 'NO'
//         }
//     } return 'YES'
// }

// console.log(tickets())

// work 2
// let a = ('11111111111111111111111111111111111111111111111')
// let b = ('22222222222222222222222222222222222222222222222')

// function calcSumm(){
//     let split = a.split('')
//     let splitTwo = b.split('')
    
//     let summ = +a.split('') + +b.split('')
//     console.log(summ)

// }

// calcSumm()


// work 3

// let listOfPosts2 = [
//   {
//       id: 1,
//       post: 'some post1',
//       title: 'title 1',
//       author: 'Ivanov',
//       comments: [
//           {
//               id: 1.1,
//               comment: 'some comment1',
//               title: 'title 1',
//               author: 'Rimus'
//           }, {
//               id: 1.2,
//               comment: 'some comment2',
//               title: 'title 2',
//               author: 'Uncle'
//           }]
//   }, {
//       id: 2,
//       post: 'some post2',
//       title: 'title 2',
//       author: 'Ivanov',
//       comments: [
//           {
//               id: 1.1,
//               comment: 'some comment1',
//               title: 'title 1',
//               author: 'Rimus'
//           },
//           {
//               id: 1.2,
//               comment: 'some comment2',
//               title: 'title 2',
//               author: 'Uncle'
//           },
//           {
//               id: 1.3,
//               comment: 'some comment3',
//               title: 'title 3',
//               author: 'Rimus'
//           },
//           {
//               id: 1.4,
//               comment: 'some comment3',
//               title: 'title 3',
//               author: 'Rimus'
//           }

//       ]
//   }, {
//       id: 3,
//       post: 'some post3',
//       title: 'title 3',
//       author: 'Rimus'
//   }, {
//       id: 4,
//       post: 'some post4',
//       title: 'title 4',
//       author: 'Uncle'
//   }
// ]

// function findMessage(arr, name){
//     let post = 0;
//     let comment = 0;
//     for (let key in listOfPosts2){
//         if (listOfPosts2[key].author === name){
//             post = post + 1
//         }
//     }

//     for (let key in listOfPosts2){
//         if(listOfPosts2.includes(name)){
//             comment = comment + 1
//         }
//         let a = listOfPosts2[key].comments;
//       for (let key in a){
//          if (a[key].author === name){
//              comment = comment + 1
            
//          }
//       }
//     }
//     return {post, comment}
// }

// console.log(findMessage(listOfPosts2, 'Rimus'))


//work 4

// const memoizer = (func) => {
//   let cache = {}
//   return (n) => {
//       if (cache[n] != undefined) {
//           console.log(`<= Fetching: "${n}" from cache`)
//           return cache[n]
//       } else {
//           console.log(`=> Write: "${n}" in cache`)
//           let result = func(n)
//           cache[n] = result
//           return result
//       }
//   }
// }

//  function myFunc(){
//     let x = 15;
//     let t = '25';
//      let sum = '';

//      if (x % 3 === 0 && x % 5 === 0 && x % 15 === 0) {
//          t *= -1
//        console.log(x)
//      }
//      return sum = +x + +t
//  }

//  console.log(myFunc(15, '20'))

// console.log('myFunc:', myFunc(10))
// console.log('myFunc:', myFunc(10))
// console.log('myFunc:', myFunc(10))

// console.log('\n')

// const myFuncMem = memoizer(myFunc)

// console.log('myFuncMem:', myFuncMem(10))
// console.log('myFuncMem:', myFuncMem(10))
// console.log('myFuncMem:', myFuncMem(10))