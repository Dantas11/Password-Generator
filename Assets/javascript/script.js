// Assignment Code
var generateBtn = document.querySelector("#generate");

// The const specifies that a variable`s value is constant and tells the complier to prevent the programmer from modifying it.
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', "\\", ':', ';', '"', "'", '<', '>', ',', '.', '/', '?',];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Generate password
function generatePassword() {
  var passwordChoice = prompt("How many characters would you like your password to contain?");

  // if statatement is a selection statement that allows more than one possible flow of control.
  if ((passwordChoice < 8) || (passwordChoice > 128)) {
    alert("Choose a length of at least 8 characters and no more than 128 characters.");
    writePassword();
  }

  var confirmSpecialCharacters = confirm("Click OK to confirm including special characters.");
  var confirmNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  var confirmLowerCaseCharacters = confirm("Click OK to confirm including lowercase characters");
  var confirmUpperCaseCharacters = confirm("Click OK to confirm including uppercase characters.");


  var arrayList = [];
  var finalpassword = [];

  if (confirmSpecialCharacters === true) {
    arrayList = arrayList.concat(specialCharacters);
  }
  if (confirmNumericCharacters === true) {
    arrayList = arrayList.concat(numericCharacters);
  }
  if (confirmLowerCaseCharacters === true) {
    arrayList = arrayList.concat(lowerCaseLetters);
  }
  if (confirmUpperCaseCharacters === true) {
    arrayList = arrayList.concat(upperCaseLetters);
  }
  if ((confirmSpecialCharacters === false) && (confirmNumericCharacters === false) && (confirmLowerCaseCharacters === false) && (confirmUpperCaseCharacters === false)) {
    alert("Choose at least one condition");
    writePassword();
  }

  console.log(arrayList);

  // The for statement creates a loop.
  for (let index = 0; index < passwordChoice; index++) {
    var randomIndex = Math.floor(Math.random() * arrayList.length);
    finalpassword.push(arrayList[randomIndex]);
  }

  // Outputs a message to the web console.
  console.log(finalpassword);

  var finalPasswordString = finalpassword.toString();
  console.log(finalPasswordString);

  finalPasswordString = finalPasswordString.replaceAll(',', '');
  console.log(finalPasswordString);

  // The return statement ends function execution and specifies a value to be returned to the function caller.
  return finalPasswordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
