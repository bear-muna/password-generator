// Generate a password that takes in multiple types of parameters
// With multiple parameters, would I throw parameters into the funtion?
// ??????? Give a prompt, answer to prompt will then given boolean expression
// Comabination of boolean expressions will give us structure of characters to use in password


// Length
// ******* Length is user input *******
  // Gives prompt
  // Rerun prompt if input is outside of constraints
// Upper, Lower, Symbols, Numbers
// Boolean values
// ???????? Objects for all the values ????????
// ???????? Objects hold characters and boolean for properites ???????



// length is a user input
var length = {
  inputLength: null,
  min: 5,
  max: 20,
  bool: false,
  input: function () {
    while (this.inputLength != Number) {
       this.inputLength = prompt("How long is the password?");
    }
    return;
  }
}


function generatePassword() {
  length.input();
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
