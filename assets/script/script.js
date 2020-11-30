// Click "Generate Password" button to start process.

var generateBtn = document.querySelector("#generate");


generateBtn.onclick = function generatePassword() { 

  // set checkboxes to unchecked after page loads.

document.getElementById("lowercaseCheck").checked = false;
document.getElementById("uppercaseCheck").checked = false;
document.getElementById("specialsCheck").checked = false;
document.getElementById("numbersCheck").checked = false;



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

// series of prompts asking types of charactes o be included in password string

var lowercaseQuery = confirm("Would you like to include lowercase letters?");
  if (lowercaseQuery) {
      document.getElementById("lowercaseCheck").checked = true;
    }

var uppercaseQuery = confirm("Would you like to include uppercase letters?");
  if (uppercaseQuery) {
      document.getElementById("uppercaseCheck").checked = true;
    } 

var specialsQuery = confirm("Would you like to include special characters?");
  if (specialsQuery) {
      document.getElementById("specialsCheck").checked = true;
    }

var numbersQuery = confirm("Would you like to include numbers?");
  if (numbersQuery) {
      document.getElementById("numbersCheck").checked = true;
    }       

// assign variables to arrays for character selection

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("Lowercase array length is " + lowercase.length);

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log("Uppercase array length is " + uppercase.length);

var specials = ["'", "~", "!", "@", "#", "$", "%","^", "&", "*", "(", ")", "_", "+", "=", "-", "'", "{", "}", "]", "[", "|", ":", ";", "<", ">", "?", ".", "/", ";"];
console.log("Special characters array length is " + specials.length);

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log("Numbers array length is " + numbers.length);

// create array which will have the character groups added based on confirm message results

var charSelection = [];
var tally = 0;
// var password = "";

// While the action tally is lee than or equal to the desired password length, randomly add desired characters to a string.=.

while (tally < pwCharLength) {

if (lowercaseQuery === true && (tally <= pwCharLength)) {
  var lowerRandNum = Math.floor(Math.random() * lowercase.length);
  charSelection.push(lowercase[lowerRandNum]);
  tally++;
}


if (uppercaseQuery === true && (tally != pwCharLength)) {
  var upperRandNum = Math.floor(Math.random() * uppercase.length);
  console.log("uppercase random number is: " + upperRandNum);
  console.log("uppercase letter seleected was: " + uppercase[upperRandNum])
  charSelection.push(uppercase[upperRandNum]);
  tally++;
  console.log("uppercase increased tally to: " + tally);
}


if (specialsQuery === true && (tally != pwCharLength)) {
  var specialsRandNum = Math.floor(Math.random() * specials.length);
  console.log("specials random number is: " + specialsRandNum);
  console.log("specials letter seleected was: " + specials[specialsRandNum])
  charSelection.push(specials[specialsRandNum]);
  tally++;
  console.log("specials increased tally to: " + tally);
}



if (numbersQuery === true && (tally != pwCharLength)) {
  var numbersRandNum = Math.floor(Math.random() * numbers.length);
  console.log("numbers random number is: " + numbersRandNum);
  console.log("numbers letter seleected was: " + numbers[numbersRandNum])
  charSelection.push(numbers[numbersRandNum]);
  tally++;
  console.log("numbers increased tally to: " + tally);
}

} // end of character selection while loop

// convert generated array to a string

var password = charSelection.join("");

// display string in console log to check result

console.log("Generated password is: " + password);

// randomly shuffle the charSelection array to randomize sequence of characters

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(charSelection);
var randPassword = charSelection.join("");

// display string in console log to check result
console.log("Randomized password is: " + randPassword);


// Write randomized password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = randPassword;
}

writePassword();


}  // end of generatePassword() function
