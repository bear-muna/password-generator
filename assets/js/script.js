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

  // null b/c I idk how to put undefined
  inputLength: null,

  // minimum value for password length
  min: 8,

  // maximum value for password length
  max: 128,

  // function to give user input on password length
  input: function () {

    // while loop to make sure user's input is within min and max
    // ?????? Refactor ??????
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
    // ***** TOO DIFFICULT ATM *******
    // Just make two separate properties for upper and lower

// Ask user to give input on what properties to use
// default == null, change == true
// if (true) -> add property into ?array? or ?new string?
// lowerCase and upperCase should be function added onto "letters"
  // letters should not have majority chance of password


var characters = {
  
  // All types of password properties as a single string
  upLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowLetters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!@#$%^&*",

  // boolean values that change depending on user input
  wantUpper: null,
  wantLower: null,
  wantNum: null,
  wantSpec: null,
  

  // How to make sure all are not null to continue prompt?
  want: function() {

    // while loop to make sure that one type of property is at least selected
    // since the default is null on 'cancel' for user input, we check for property selection with true and null
    while (this.wantUpper == null
      && this.wantLower == null
      && this.wantNum == null
      && this.wantSpec == null) {

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
}
  

// Turn strings into an array
// Concat() arrays into one larger array
// TODO: Combine the character array section with the concat section
function arrayMaker() {

  // takes the string and turns into character array
  var upLetterArray = characters.upLetters.split("");
  console.log(upLetterArray);

  var lowLetterArray = characters.lowLetters.split("");
  console.log(lowLetterArray);

  var numberArray = characters.numbers.split("");
  console.log(numberArray);

  var specialArray = characters.specialChar.split("");
  console.log(specialArray);

  // master array used to add up all the selected properties
  var masterArray = [];


  // There's got to be a more effecient way to concat *********
  // selected array is then concatinated onto the master array
  if (characters.wantUpper == true) {
    masterArray = masterArray.concat(upLetterArray);
    }
  if (characters.wantLower == true) {
    masterArray = masterArray.concat(lowLetterArray);
  }
  if (characters.wantNum == true) {
    masterArray = masterArray.concat(numberArray);
  }
  if (characters.wantSpec == true) {
    masterArray = masterArray.concat(specialArray);
  }

  console.log(masterArray);
  
}


// For loop after taking in inputLength as a limit
// TODO: Look up .random() to figure out how to incorporate the array length with the random number to generate an index
function randomizer() {
  for (let i = 0; i < length.inputLength; i++) {

  }
}

// Function to generate password
function generatePassword() {
  length.input();
  characters.want();


  console.log(length.inputLength);
  console.log(characters);

  arrayMaker();
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
