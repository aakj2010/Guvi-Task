// // 1.Fixed code to get the largest of three.
// //*************************************************************************
// let aa = (f, s, t) => {
//     console.log(f, s, t);
//     if (f > s && f > t) {
//       console.log(f);
//     } else if (s > f && s > t) {
//       console.log(s);
//     } else {
//       console.log(t);
//     }
//   };
//   aa(1, 2, 3);
  
  
//   // 2.Fixed code to Sum of the digits present in the number
//   //*************************************************************************
  
//   let n = 123;
//   console.log(add(n));
//   function add(n) {
//     let sum = 0;
//     while (n !== 0) {
//       sum += n % 10;
//       n = parseInt(n / 10);
//     }
//     return sum;
//   }
  
//   // 3.Fixed code to Sum of all numbers using IIFE function
//   //*************************************************************************
  
  // const arr = [9, 8, 5, 6, 4, 3, 2, 1];
  // (function addition(arr) {
  //   let sum = 0;
  //   for (var i = 0; i < arr.length; i++) sum += arr[i];
  //   console.log(sum);
  // })(arr);
  
//   // 4.Fixed code to gen Title caps.
//   //*************************************************************************
  
  // var arr = ["guvi", "geek", "zen", "fullstack"];
  // var ano = function (arro) {
  //   for (var i = 0; i <= arro.length; i++) {
  //     console.log(arro[i].CharAt(0).toUpperCase() + arro[i].substr(1));
  //   }
  // };
  // ano(arr);
  
//   // 5.Fixed code to return the Prime numbers
//   //*************************************************************************
  
  // const newArray = [1, 3, 2, 5, 10];
  // const myPrime = newArray.filter((num) => {
  //   if (num === 1 || num === 0) return false;
  //   for (let i = 2; i <= Math.sqrt(num); i++) {
  //     if (num % i === 0) {
  //       return false;
  //     }
  //   }
  //   return num;
  // });
  // console.log(myPrime);
  
  
//   // 6.Fixed code to sum the number in that array
//   //*************************************************************************
  
  // const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // const sum = num.reduce((a, b) => a + b);
  // console.log(sum);
  
  
// // 7.Fixed code to gen Title caps.
// //*************************************************************************

//     var array = ["guvi", "geek", "zen", "fullstack"];
//     var ano = function(arr) {
//       for (var i = 0; i <= array.length; i++) {
//       console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//      }
//   }
// ano();

  
//   // 8.print all odd numbers in an array using IIFE function
//   //*************************************************************************
  
  // var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
  // (function (arr) {
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 1) {
  //       console.log(arr[i]);
  //     }
  //   }
  // })(arr);
  
//   // 9.Fixed code to reverse.
// //*************************************************************************
  
  // (function (str) {
  //   str1 = str.split("").reverse().join("");
  //   console.log(str1);
  // })("abcd");
  
//   // 10.Fixed code to remove duplicates.
//   //*************************************************************************
  
  // var res = function (arr) {
  //   let newArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (newArr.indexOf(arr[i]) === -1) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   console.log(newArr);
  // };
  // res(["guvi", "geek", "guvi", "duplicate", "geek"]);
  
  // 11.Fixed code to give the below output:
  // *************************************************************************
  // /*Expected Output:
  // [   {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
  //     {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”} ]*/
  // var array = [
  //   [
  //     ["firstname", "vasanth"],
  //     ["lastname", "Raje"],
  //     ["age", 24],
  //     ["role", "JSWizard"],
  //   ],
  //   [
  //     ["firstname", "Sri"],
  //     ["lastname", "Devi"],
  //     ["age", 28],
  //     ["role", "Coder"],
  //   ],
  // ];
  // var final = [];
  // while (array.length !== 0) {
  //   var outer_remove = array.shift();
  //   let new_object = {};
  //   while (outer_remove.length !== 0) {
  //     var inner_remove = outer_remove.shift();
  //     var key = inner_remove[0];
  //     var value = inner_remove[1];
  //     new_object[key] = value;
  //   }
  //   final.push(new_object);
  // }
  // console.log(final);
  
  // 12.Fixed code to give the Sum of odd numbers in an array
  //*************************************************************************
  
  var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
  var s = as.reduce(function (a, c) {
    if (c % 2 !== 0) {
      return a + c;
    } else return a;
  }, 0);
  console.log(s);