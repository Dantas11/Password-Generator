// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|',"\\",':',';','"',"'",'<','>',',','.','/','?',];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(lowerCaseLetters, upperCaseLetters, specialCharacters, numericCharacters);

// Generate password
function generatePassword() {
  var passwordChoice = prompt("How many characters would you like your password to contain?");
  var confirmSpecialCharacters = confirm("Click ok to confirm including special characters.");
  var confirmNumericCharacters = confirm("Click ok to confirm including numeric characters")
  var confirmLowerCaseCharacters = confirm("Click ok to confirm including lowercase characters");
  var confirmUpperCaseCharacters = confirm("Click ok to confirm including uppercase characters");
  console.log(passwordChoice, specialCharacters, numericCharacters, lowerCaseCharacters, upperCaseCharacters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
