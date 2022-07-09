// // 1st Question
// // 1) a) Print odd numbers in an array using ANONYMOUS function method


// let odd = [];
// let input = function(a){
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2==1){
//             odd.push(a[i]);
//         }

// }
// };
// input([1,2,3,4,5]);
// console.log(odd);



// //1)a)Print odd numbers in an array using  IIFE method

// (function(){
//     let a =[1,2,3,4,5];
//     let odd =[];
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2==1){
//             odd.push(a[i]);
//         }
//         else{
//             continue;
//         } 
// }
// console.log(odd);
// })();

// ============================================================================================================


// //1)b)Convert all the strings to title caps in a string array using  ANONYMOUS function method.


// let odd = [];
// let input = function(str){
//  for(let i=0;i<str.length;i++){
//  str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");

//     odd.push(str[i]);
//  }
// };
// input(["haroon","midhun"]);
// console.log(odd);



// //1)b)Convert all the strings to title caps in a string array using  IIFE method

// (function(){
//     let str =["midhun","haroon"];
//     let input =[];
//  for(let i=0;i<str.length;i++){
//  str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");

//     input.push(str[i]);
//  }
//  console.log(input);
//  })();

// ==================================================================================================================================



// //1)c)1)Sum of all numbers in an array using ANONYMOUS function method.

// let result="";
// let input = function(num){
//      result =num.reduce((acc,cur)=>{
//         return acc+cur;  
//     });

//     console.log(result);
// };
// input([1,2,3,4,5]);



// //1)c)Sum of all numbers in an array using  IIFE method

// (function(){
//     let input = [1,2,3,4,5]
//     let result = input.reduce((acc, cur)=>{
//         return acc + cur;
//     })
//     console.log(result);
// })()

// ===================================================================


// //1)d)Return all the prime numbers in an array using ANONYMOUS function method.


// let result=[];
// let input= function(a){

//     for(let x of a){
//         let repeat=0;
//             for(let i=2;i<=x/2;i++){
//             if(x%i==0){
//                 repeat=1;
//                 break;
//             }
//             }
//             if(repeat==0){
//                 result.push(x)
//             }
//         }
//         console.log(result);  
// };
// input([3,13,17,22,12,44,55,66,89]);




// //1)d)2)Return all the prime numbers in an array using IIFE method

// (function(){
//         let input = [ 3,13,17,22,12,44,55,66,89];
//         let result = [];

//         for(let x of input){
//             let repeat=0;
//                 for(let i=2;i<=x/2;i++){
//                 if(x%i==0){
//                     repeat=1;
//                     break;
//                 }
//                 }
//                 if(repeat==0){
//                     result.push(x)
//                 }
//             }
//             console.log(result);

//     })();

//   // =========================================================================================



// //1)e)Return all the palindromes in an array using ANONYMOUS function method.


// let listPalindrome = ["yarn", "peep", "noon", "rotator","more"];
// let checkPalindrome = (function(listPalindrome){
//     let isPalindrome = [];
//     listPalindrome.forEach(function (para){
//         let inputWord = para;
//         let reverseWord = para.split("").reverse().join("");
//         if(inputWord === reverseWord){
//             isPalindrome.push(inputWord);
//         }
//     })
//     return isPalindrome;

// })(listPalindrome);
// console.log("output", checkPalindrome);


// //1)e)2)Return all the palindromes in an array using IIFE method.
//  (function(){

//     let listPalindrome = ["yarn", "peep", "noon", "rotator","more"];
//     let isPalindrome = [];
//      listPalindrome.forEach(function(para){

//         let inputWord = para;
//         let reverseWord = para.split("").reverse().join("");

//         if(inputWord === reverseWord){
//             isPalindrome.push(inputWord);
//         }

//         return isPalindrome;
//     })
//     console.log("Output:",isPalindrome);

//  })();

// //  ========================================================================



// //1)f)1)Return median of two sorted arrays of the same size using  anonymous function method.


// let check = function(array1,array2){
//     var n1 = array1.length;
//     var n2 = array2.length;
//     var n=n1;
//         var i = 0; 
//         var j = 0; 
//         var count;
//         var m1 = -1, m2 = -1;
//         for (count = 0; count <= n; count++)
//         {       
//             if (i == n)
//             {
//                 m1 = m2;
//                 m2 = array2[0];
//                 break;
//             }
//             else if (j == n)
//             {
//                 m1 = m2;
//                 m2 = array1[0];
//                 break;
//             }

//             if (array1[i] <= array2[j])
//             {
//                 m1 = m2; 
//                 m2 = array1[i];
//                 i++;
//             }
//             else
//             {
//                 m1 = m2; 
//                 m2 = array2[j];
//                 j++;
//             }
//         }


//         console.log((m1 + m2)/2);
//     };
//     check([10, 20, 30, 40, 50],[60, 70, 80, 90, 100]);



// //1)f)Return median of two sorted arrays of the same size using IIFE method

// (function(){
//     var ar1 = [10, 20, 30, 40, 50];
//     var ar2 = [60, 70, 80, 90, 100];
//     var n1 = ar1.length;
//     var n2 = ar2.length;
//     var n=n1;
//         var i = 0; 
//         var j = 0; 
//         var count;
//         var m1 = -1, m2 = -1;
//         for (count = 0; count <= n; count++)
//         {       
//             if (i == n)
//             {
//                 m1 = m2;
//                 m2 = ar2[0];
//                 break;
//             }
//             else if (j == n)
//             {
//                 m1 = m2;
//                 m2 = ar1[0];
//                 break;
//             }

//             if (ar1[i] <= ar2[j])
//             {
//                 m1 = m2; 
//                 m2 = ar1[i];
//                 i++;
//             }
//             else
//             {
//                 m1 = m2; 
//                 m2 = ar2[j];
//                 j++;
//             }
//         }


//         console.log((m1 + m2)/2);
//     })();

// // ==================================================================



// // //1)g) Remove duplicates from an array using ANONYMOUS function method.

// let input = function(array){
//     let result = array.filter((item, index) => {
//         return array.indexOf(item) === index;
//     });
//     console.log(result);
// }
// input([20,30,40,20,50,20,80,90,50,80])


// //1)g) Remove duplicates from an array using   IIFE method.


// (function(){
//     let array = [20, 30, 40, 20, 50, 99, 99, 80];

//     let result = array.filter((item, index) => {
//     return array.indexOf(item) === index;
// });

// console.log(result);
// })();

// // ==========================================================================


// //1)h)1)Rotate an array by k times using  anonymous function method.


// let Rotate=function(array,k){
//     let result=[];
//     let n=array.length;
//         k=k%n;
//     for(i=0;i<array.length;i++){
//        if(i<k){
//          result[i]=array[n-k+i];
//           }
//        else{
//            result[i]=array[i-k];
//           }
//       }
//      console.log(result);
//     };
// Rotate([22,23,34,45,62],4);



// //1)h) Rotate an array by k times using IIFE  Method

// (function(){
//     let array=[22,23,34,45,62];
//     let k=2;
//     let result=[];
//     let n=array.length;
//     k=k%n;
//         for(i=0;i<array.length;i++){
//         if(i<k){
//          result[i]=array[n-k+i]
//       }
//         else{
//         result[i]=array[i-k]
//      }
//     }
//     console.log(result)

// })();

// // ==================================================================================
// // ==================================================================================




// //3)a)Print odd numbers in an array using arrow functions

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddnumbers = numbers.filter(ele => ele % 2 == 1);
// console.log(oddnumbers);



// //3)b)Convert all the strings to title caps in a string array using arrow functions

// let str =["guvi","arslan","haroon"];
// let check = (() => {
// let oddarr =[];
//       for(let i=0;i<str.length;i++){
// str[i] =str[i].split(",").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(",");
    
//     oddarr.push(str[i]);
//  }
//  return oddarr;
// });
// console.log(check());


// //3)c)Sum of all numbers in an array using arrow functions


// let array = [1, 2, 3, 4, 5]
// let result = (()=>{
//     let input = '';
//     input = array.reduce((acc, cur)=>{
//         return acc + cur;
//     })
//     return(input);
// })
// console.log(result())


// //3)d)Return all the prime numbers in an array using arrow functions

// let array=[ 3,13,17,22,12,44,55,66,89];
// let check = (()=>{
// let res=[];
//     for(let x of array){
//         let repeat=0;
//             for(let i=2;i<=x/2;i++){
                
//             if(x%i==0){
//                 repeat=1;
//                 break;
//             }
//             }
//             if(repeat==0){
//                 res.push(x)
//             }
//         }
//         return res;  
// });
// console.log("Prime Number is :", check());


//3)e)Return all the palindromes in an array using arrow functions

let listPalindrome = ["yarn", "peep", "noon", "rotator","more"];
let checkPalindrome = (()=>{
    let isPalindrome = [];
    listPalindrome.forEach(function (params){
        let inputWord = params;
        let reverseWord = params.split("").reverse().join("");
        if(inputWord === reverseWord){
            isPalindrome.push(inputWord);
        }
    })
    return isPalindrome;
    
});
console.log("Polyndrome :", checkPalindrome());



