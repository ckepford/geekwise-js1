// alert("I hope you are having a nice day.");
//
// confirm("Morpheus is only holding one pill and it's purple. Do ou say OK and take it, or Cancel the off");

// prompt("Enter your name");

// var userAge = parseInt( prompt("Enter your age") );
// console.log(userAge + 10);

// string object

// var myString = "this is a string"; //string literal
// var myStringObj = new String("this is also a string");
// console.log(myStringObj);

//number object
// var num = 7;
// var numObj = new Number(7);
// console.log(typeof num);
// console.log(numObj);

//typeof  type this in front of anything to find out what it is

//float object //float is a decimal not an integer
// var float = 5.2346294294;
// console.log(float);

//boolean object
// var bool = true;
// console.log(bool);

//array object
// var arr = [square brackets identify arrays];
// var arr = ['red', 'orange', 'green'];
// var numArr [0, 1, 2, 3];
// console.log(numArr[1] + numArr[2]);
// // console.log(arr [2]);

//objects    - have properties and values
// var myCar = {
//   make: "Jeep",
//   model: "Wrangler",
//   year: 2014
// };
// console.log( myCar.year );

// Math object
//round to specific decimal
// var num1 = 5.2738479;
// console.log(Math.round(num1) );
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));
// var rand = Math.random();
// rand = rand*10;
// rand = Math.floor(rand);
// console.log(rand);
//why down?
// console.log(Math.round( (Math.random() * 10) ));

// Date object
// var theDate = new Date();
// console.log(theDate.getMonth());
//getDay() === day of the week - 0 based
//getDate() === day of the month
//getMonth === month - 0 based
//getFullYear === year

// if( theDate.getDay() === 0){
//   console.log("sunday");
// }else if(theDate.getDay() === 1){
//   console.log("monday");
// }
// else if(theDate.getDay() === 2){
//   console.log("tuesday");
// }
// else if(theDate.getDay() === 3){
//   console.log("wednesday");
// }
// var myBday = new Date(1990, 11, 02);
// var myDate = theDate.toLocaleString("us-en", {day: "2-digit"});
// // console.log(myBday);
//options:
// weekday
// year
// month
// day
// hour
// narrow, short, long, numeric, 2-digits
// //
// var myBdate = myBday.toLocaleString("us-en", {day: "numeric"});
// var myBmon = myBday.toLocaleString("us-en", {month: "long"});
// var myByear = myBday.toLocaleString("us-en", {year: "numeric"});
// console.log(myBmon + "" + myBdate + "," + myByear);

//prompt user for 3 individual items
//ask the user for their number birth month
//ask user for their number birth day
//ask user for their full birth year
//save each response as a variable
//parse each response into a Number
//for 0 based items, subtract 1
//create a new Date instance representing users birthday
// var myBday = new Date(1990, 11, 02); format- year month day

//var someVariableName = new Date(var, var, var);

//take users birthday object and parse to console in the following format:
// Oct 02,99
var userMon = parseInt(prompt("please enter your birth month")) -1;
var userDay = parseInt(prompt("please enter your birth day"));
var userYear = parseInt(prompt("please enter your full birth year"));

var userBirth = new Date(userYear, userMon, userDay);

var userMon = userBirth.toLocaleString("us-en", {month: "short"});
var userDay = userBirth.toLocaleString("us-en", {day: "2-digit"});
var userYear = userBirth.toLocaleString("us-en", {year: "2-digit"});

console.log(userMon + " " + userDay + "," + userYear);

//mdn mozilla developer network
// w3schools
// javascript30.com
