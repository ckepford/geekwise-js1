/*
var myName = "Carey Kepford";
console.log(myName);

//.length
console.log(myName.length);

//.charAt()
console.log(myName.charAt(4));
console.log(myName.charAt(39));

//.indexOf()
console.log(myName.indexOf("K"));
console.log(myName.indexOf("r"));

//.lastIndexOf()
console.log(myName.lastIndexOf("a, 3"));

// .concat()
console.log(myName.concat(" oreos"));

//.substring()
console.log(myName.substring(0, 3));
console.log(myName.substring(7, 5));
console.log(myName.substring(8));

//.substr()
console.log(myName.substr(0,3));
console.log(myName.substr(5,2));
console.log(myName.substr(8));

//.toUppercase()
console.log(myName.toUpperCase());

//.toLowerCase()
console.log(myName.toLowerCase());

var newUser = "          yoda            ";
console.log(newUser);

//.trim()
//regular expressions - look into
console.log(newUser.trim());
*/

// Arrays identified by []
// var sodas = ['pepsi', 'coke', 'mountain dew'];
// console.log(sodas);
// console.log(sodas);
// console.log( Array.isArray(sodas) );

 var colors = ['red', 'orange', 'purple'];
 // console.log(colors);
 var arrLength = colors.push('green');
 // console.log('The new array is: ' + colors);
 // console.log("The array length is: " + arrLength);
 arrLength = colors.unshift('pink');
 // console.log('new array ', colors);

var item = colors.pop();
// console.log('Item is ', item);
// console.log('The new array colors ', colors);

item = colors.shift();
// console.log('Item is ', item);

// console.log('New array is ', colors);
// console.log('Array length is ', colors.length);

console.log(colors);
//.indexOf()
// console.log(colors.indexOf('red'));

//.lastIndexOf()
// console.log(colors.lastIndexOf('orange'));

//.splice( ) - remove or add items
var removeItem = colors.splice(1, 2);
// console.log(colors);
// console.log(removeItem);

var addItems = colors.splice(1, 0, 'green', 'blue');
// console.log(colors);
// console.log(addItems);

var newColors = ['blue', 'indigo', 'orange', 'purple', 'red', 'yellow'];
//remove the color green and in its place add indigo

var remGreen = (newColors.indexOf('green'));
// console.log(remGreen);

newColors.splice(remGreen, 1, 'indigo');
// console.log(newColors);
//.slice() - upto but not including
var moreColors = newColors.slice(0, 3);
// console.log(moreColors);

//.reverse
var revColors = newColors.reverse();
// console.log(newColors);
// console.log(revColors);

newColors.sort();

var names = ['Matt', 'matt', 'david', 'higley', 'Higley', 'David'];
names.sort();
// console.log(names);

//bubble sort
var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
  return a - b;
});
console.log(points);

// //for loop
// for(var i = 0; i < newColors.length; i++){
//   // console.log(newColors[i]);
//   console.log('my fav color is ' newColors[i]);
// }:

// e gives the value i the index
var modColors = newColors.map(function(e, i){
  console.log(e);
  // console.log(i);
  console.log('my fav color', e);
});
console.log(modColors);

var modPoints = points.map(function(e){
  return e * 2;
})
console.log(points);
console.log(modPoints);
