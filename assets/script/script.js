// Assignment Code

// Click "Generate Password" button to start process.

var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function() { 

// series of prompts asking types of charactes o be included in password string

var lowercaseQuery = confirm("Would you like to include lowercase letters?");
var uppercaseQuery = confirm("Would you like to include uppercase letters?");
var symbolsQuery = confirm("Would you like to include symbols?");
var numbersQuery = confirm("Would you like to include numbers?");

console.log(lowercaseQuery, uppercaseQuery, symbolsQuery, numbersQuery);

// assign variables to arrays for character selection

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("Lowercase array length is " + lowercase.length);

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log("Uppercase array length is " + uppercase.length);

var symbols = ["'", "~", "!", "@", "#", "$", "%","^", "&", "*", "(", ")", "_", "+", "=", "-", "'", "{", "}", "]", "[", "|", ":", ";", "<", ">", "?", ".", "/", ";"];
console.log("Symbols array length is " + symbols.length);

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log("Numbers array length is " + numbers.length);

// Create a prompt to get the user's desired password lenth (between 8 -- 128)
var pwCharLength = 0;

while (pwCharLength < 8 || pwCharLength > 128) {

  pwCharLength = prompt("Please enter a number between 8 and 128 for the length of your password.");

  if (pwCharLength >= 8 && pwCharLength <= 128) {
    alert("Thank you for choosing a password of " + pwCharLength + " characters.");
  }
  else if (pwCharLength < 8 || pwCharLength > 128) {
    alert("Please try again.");
  }
}


// create array which will have the character groups added based on confirm message results

var charSelection = [];
var tally = 0;
var password = "";

// While the action tally is lee than or equal to the desired password length, randomly add desired characters to a string.=.

while (tally < pwCharLength) {

if (lowercaseQuery === true && (tally <= pwCharLength)) {
  var lowerRandNum = Math.floor(Math.random() * lowercase.length);
  console.log("lowercase random number is: " + lowerRandNum);
  console.log("lowercase letter seleected was: " + lowercase[lowerRandNum])
  charSelection.push(lowercase[lowerRandNum]);
  tally++;
  console.log("lowercase increased tally to: " + tally);
}


if (uppercaseQuery === true && (tally != pwCharLength)) {
  var upperRandNum = Math.floor(Math.random() * uppercase.length);
  console.log("uppercase random number is: " + upperRandNum);
  console.log("uppercase letter seleected was: " + uppercase[upperRandNum])
  charSelection.push(uppercase[upperRandNum]);
  tally++;
  console.log("uppercase increased tally to: " + tally);
}


if (symbolsQuery === true && (tally != pwCharLength)) {
  var symbolsRandNum = Math.floor(Math.random() * symbols.length);
  console.log("symbols random number is: " + symbolsRandNum);
  console.log("symbols letter seleected was: " + symbols[symbolsRandNum])
  charSelection.push(symbols[symbolsRandNum]);
  tally++;
  console.log("symbols increased tally to: " + tally);
}



if (numbersQuery === true && (tally != pwCharLength)) {
  var numbersRandNum = Math.floor(Math.random() * numbers.length);
  console.log("numbers random number is: " + numbersRandNum);
  console.log("numbers letter seleected was: " + numbers[numbersRandNum])
  charSelection.push(numbers[numbersRandNum]);
  tally++;
  console.log("numbers increased tally to: " + tally);
}

} // end of while loop

console.log(charSelection);

} 

// randomly shuffle or arrange an array

// convert array to a string

// display in html box

// change the password character length string to an integer

console.log(pwCharLength);


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();  need to define this prior
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
