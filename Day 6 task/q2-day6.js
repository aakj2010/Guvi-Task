//****************************************************************************
// <!-- 1)1)Find the culprit ...fix.html -->
//****************************************************************************

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( "I'm JavaScript!");
//  </script>
//  Whats the error in this ?
// </body>
// </html>


//***************************************************************************
// <!-- 1)2)Find the culprit and invoke the alert ...fix.html -->
//****************************************************************************

// <!DOCTYPE html>
// <html>
//     <body>
//         <script src="script.js"></script>
//     </body>
// </html>
// <!--  script.js -->
// alert("I'm invoked!");

//****************************************************************************
// <!-- 1)3)Explain the below how it works....explain.html -->
//****************************************************************************
// <!DOCTYPE html>
// <html>
//     <body>
//         <script src="script.js"></script>
//     </body>
// </html>

// <!--  script.js -->

// alert("I'm JavaScript!");// output of Alert shows I'm JavaScript! 
// alert('Hello') /* this line is not having semicolon but output of Alert shows
//                    Hello and then for good practice we can use semicolon.*/
// alert(`Wor
//  ld`)// output of alert shows Wor is in oneline Id is in anotherline.
// alert(3 +
// 1
// + 2); /* this is multiple line code and its working .yes, output of alert shows 6. 
//          alert();in between the alert bracket it done everyline action perfectly 
//          and show the output.*/

//****************************************************************************
// <!-- 1)4)Fix the below to alert Guvi geek....fix.html-->
//****************************************************************************

// <!DOCTYPE html>
// <html>
//     <body>
//         <script src="script.js"></script>
//     </body>
// </html>

// <!--  script.js -->

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin =  fname +" "+lname;
// alert( admin ); // "Guvi geek"

// //****************************************************************************
// <!-- 1)5)Fix the below to alert hello Guvi geek....fix.html-->
// //****************************************************************************

// <!DOCTYPE html>
// <html>
//     <body>
//         <script src="script.js"></script>
//     </body>
// </html>

// <!--  script.js -->
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );

// //****************************************************************************
// // <!-- 1)6)Fix the below to alert sum of two numbers....fix.html-->
// //****************************************************************************

// <!DOCTYPE html>
// <html>
//     <body>
//         <script src="script.js"></script>
//     </body>
// </html>

// <!--  script.js -->
// let a = Number(prompt("First number?",''));
// let b = Number(prompt("Second number?",''));
// alert(a + b);

// //****************************************************************************
// <!-- 1)7)Explain Why the Code is blasted and how to diffuse it and get “Diffused”-->
// //****************************************************************************

// var a = "2" > "12";// 
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted");
// }
// else
// {
//   console.log("Diffused"); 
// }

// The above code considers the values of var a is  “2” and “12” as strings and 
// compares them with their decimal ASCII value by using the  operator > that gives 
// output  Code is blasted.

// Andthen you can use operator < output  get “Diffused”
// var a = "2" < "12";// 
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted");
// }
// else
// {
//   console.log("Diffused"); 
// }

// //****************************************************************************
// <!-- 1)8)How to get the success in console -->
// //****************************************************************************
// let a = Number(prompt("Enter a number?"));//if the input is not a number you will get output success.
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// //****************************************************************************
// <!-- 1)9)How to get the correct score in console. -->
// //****************************************************************************
// let value = Number(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// //****************************************************************************
// <!-- 1)10)Fix the code to welcome the Employee -->
// //****************************************************************************

// let login = 'Employee';
// let message = (login == 'Employee') ?'Welcome Employee':/* we used multiple conditional operator and 
//                                                          the output statement of this condition added 
//                                                           (login == 'Employee') ?'Welcome Employee':*/
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);
// //****************************************************************************
// // <!-- 1)11)Fix the code to welcome the boss --!>
// //****************************************************************************

// let message;
// if (null || 2 || undefined )
// {
//  message = "welcome boss";
// }
// else
// {
//  message = "Go away";
// }
//   console.log(message);

// //****************************************************************************
// <!-- 1)12)Fix the code to welcome -->
// //****************************************************************************

// let message;
// let lock ="";
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
// //****************************************************************************
// <!-- 1)13)Fix the code to welcome -->
// //****************************************************************************

// let message;
// let lock = "";
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// //****************************************************************************
// <!-- 1)14)Change the code to print -->
// //****************************************************************************
// let i=3;
// while ( i ) {
//   console.log(i);
//   --i; 
// }
// //****************************************************************************
// <!-- 1)15)Change the code to print 1 to 10 in 4 lines -->
// //****************************************************************************
// let num =10;
// let k="";
// for(let i=1;i<=num;i++)
// {
// k = k+i+" ";

// }
// console.log(k);
// console.log(k);
// console.log(k);
// console.log(k);
// //****************************************************************************
// <!-- 1)16)Change the code to print even numbers -->
// //****************************************************************************

// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
    
//     console.log(num);
//   }
// //****************************************************************************
// <!-- 1)17)Change the code to print all the gifts -->
// //****************************************************************************

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }


// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += 'hi';
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg);


var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += 'hi';
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);
