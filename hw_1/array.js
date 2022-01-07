//  Найти минимальный и элемент массива способ 1
    // let array = [100, 150, 0, 30, -1, 20];
    //   max = array[0];
    //   maxIndex = 0;
    //   for (i = 1; i < array.length; i++) {
    //  if (array[i] > max) {
    //      max = array[i];
    //       maxIndex = i;}
    //    }

    //    console.log(max);
    //    console.log(maxIndex);


    //  Минимальный элемент массива
    //   let arr = [20, 37, 15, 23, 25];

    //   let min = arr[0];
    //   let minIndex = 0;

    //   for (let i = 1; i < arr.length; i++){ 
    //   if (arr[i] < min) {
    //       min = arr[i];
    //       minIndex = i;
    //   }
    //   }

    //   console.log(min);
    //  console.log(minIndex);


//Посчитать сумму элементов массива с нечетными индексами

    // let arr = [1, 2, 3, 4, 5, 6];

    // let sum = 0;

    // function index() {
    // for ( let i = 0; i < arr.length; i++) { 
    //     if (arr[i] % 2 !== 0 ) {
    //     sum = sum + arr[i]; 
    // }
    // }
    // console.log(sum);
    // }
    // index();

//Сделать реверс массива (массив в обратном направлении)



//  function rev() { 
//         let arr = [1, 5, 7, 9, 10, 11];

//     let n = arr.length;

//     for (let i = 0; i < n / 2; i++){
//         let temp = arr[n - i - 1];
//         arr[n - i - 1] = arr[i];
//         arr[i] = temp;
//     }
//     console.log(arr)
//     }

//     rev()


 //Посчитать количество нечетных элементов массива
//  let arr = [1, 2, 3, 4, 5, 6, 7]; 


//  function index(){
//     let arr = [1, 2, 3, 4, 5, 6, 7,]; 
//     let sum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          if (arr[i] % 2 !== 0) sum++;
//      }
//      return sum
//  }
//  console.log(index());

//Поменять местами первую и вторую половину массива, например, для массива 
// 1 2 3 4, результат 3 4 1 2

// let arr = [21, 12, 33, 4, 5, 16, 7, 18]

// int[] arrСhange = new int[arry.length];

// System.arraycopy(arry, arry.length/2, arrСhange, 0, arry.length/2);
// System.arraycopy(arry, 0, arrСhange, arry.length/2, arry.length/2);

// System.out.println(Arrays.toString(arrСhange));


//Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
// function bubSort(){ 
// let arr = [1, 32, 23, 4, 5 , 15, 20, 10, 11, 9]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) { 
//         if (arr[j] > arr[j + 1] ) {
//             let a = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j+1] = a;
//     }

// }
// }
// return arr;
// }

// console.log(bubSort())

// function select(){
//     let arr = [10, 1, 0, 5, 25, 100, 21]
//     let max = 0;

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }

// select()

// function select(){
//     let arr = [10, 1, 0, 5, 25, 100, 21]
//     for (let j = 0; j < arr.length; j++){ 
//     let max = 0;
//     let index = 0;

//     for (let i = 0; i < arr.length - j; i++){
//         if (arr[i] > max){
//             max = arr[i]
//             index = i
//         }
//     }

//     let a = arr[arr.length - 1 - j]
//     arr[arr.length - 1 - j] = max
//     arr[index] = a

// }
// console.log(arr)
// }

// select()

//  function sort(){
//      let arr = [15, 25, 5, 10, 30, 1]

//      for (let i = 1; i < arr.length; i++){
//          let current = arr[i];
//          let j = i;
//          while (j > 0 && arr[j - 1] > current){
//              arr [j] = arr [j-1]
//              j--;
//          }
//          arr[j] = current;
//      }
//      console.log(arr)
//  }


// Отсортировать массив (Quick, Merge, Shell, Heap)


























// sort()

// let out = document.querySelector('.out')

// for (let i = 1; i < 5; i++){
//      for (let n = 1; n < 10; n++){ 
//      out += `${i} * ${n} = ${n*i}`
//      }
//      console.log(out);
// }


// let out = document.querySelector('.out')



// for (let i = 0; i < 10; i++) { 
//     for (let n = 0; n < 10; n++){ 
//     out.innerHTML += '*      '
// }
// out.innerHTML += '<br> '
// }






