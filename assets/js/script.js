// Generate a password that takes in multiple types of parameters
// With multiple parameters, would I throw parameters into the funtion?
// ??????? Give a prompt, answer to prompt will then given boolean expression
// Comabination of boolean expressions will give us structure of characters to use in password


// Length
// ******* Length is user input *******
  // Gives prompt
  // Rerun prompt if input is outside of constraints
  // ****** Must be positive integer *******
// Upper, Lower, Symbols, Numbers
// Boolean values
// ???????? Objects for all the values ????????
// ???????? Objects hold characters and boolean for properites ???????



// length is a user input
var length = {
  inputLength: null,
  min: 8,
  max: 128,
  bool: false,
  input: function () {
    while (!((this.min <= this.inputLength) && (this.inputLength <= this.max))) {
      let userInput;
      userInput = prompt("How long is the password?");
      this.inputLength = Math.round(userInput)
    }
    return;
  }
}


// How to add all characters into a single string
  // Concatinate but with a method???
// Need to give boolean values for each property from user input
// Need upperCase and lowerCase property / method

// Ask user to give input on what properties to use
// default == null, change == true
// if (true) -> add property into ?array? or ?new string?
// lowerCase and upperCase should be function added onto "letters"
  // letters should not have majority chance of password


var characters = {
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChar: "!@#$%^&*",

  wantUpper: null,
  wantLower: null,
  wantNum: null,
  wantSpec: null,
  
  want: function() {
    var upperInput = prompt("Does your password want upper case letter? Input any value for 'Yes', Cancel for 'No'", "YES");
    if (upperInput !== null) {
      this.wantUpper = true;
    }
    var lowerInput = prompt("Does your password want lower case letter? Input any value for 'Yes', cancel for 'No'", "YES");
    if (lowerInput !== null) {
      this.wantLower = true;
    }
    var numInput = prompt("Does your password want numbers? Input any value for 'Yes', cancel for 'No'", "YES");
    if (numInput !== null) {
      this.wantNum = true;
    }
    var specInput = prompt("Does your password want special characters? Input any value for 'Yes', cancel for 'No'", "YES");
    if (specInput !== null) {
      this.wantSpec = true;
    }
  }
}
  

// For loop after taking in inputLength as a limit
function randomizer() {
  for (let i = 0; i < length.inputLength; i++) {

  }
}



function generatePassword() {
  length.input();
  characters.want();


  console.log(length.inputLength);
  console.log(characters);
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
