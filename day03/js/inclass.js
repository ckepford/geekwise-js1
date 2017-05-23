var usernameArray = [];
var usernames = '';
usernameArray.push(usernames);

console.log(usernameArray);
function getUser(){
  usernames = prompt("Please enter another username");
  // usernameArray.push(usernames);
  usernameArray.push(usernames);
  console.log(usernameArray);
}


function removeUser(){
  usernameArray.shift();
  console.log(usernameArray);
}
