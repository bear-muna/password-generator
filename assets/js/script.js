var masterArray = [];
var passwordArray = [];

var length = {
  inputLength: undefined,
  min: 8,
  max: 128,
  input: function () {
    while (!((this.min <= this.inputLength) && (this.inputLength <= this.max))) {
      let userInput;
      userInput = prompt("How long is the password?");
      this.inputLength = Math.round(userInput)
    }
    return;
  }
}
var characters = {
  upLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowLetters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!@#$%^&*",

  wantUpper: false,
  wantLower: false,
  wantNum: false,
  wantSpec: false,
  
  want: function() {
    while (this.wantUpper == false
      && this.wantLower == false
      && this.wantNum == false
      && this.wantSpec == false) {
        characters.wantUpper = confirm("Does your password want upper case letter?\n" + 
                                        "OK for 'Yes'\n" + 
                                        "Cancel for 'No'");

        characters.wantLower = confirm("Does your password want lower case letter?\n" + 
                                        "OK for 'Yes'\n" + 
                                        "Cancel for 'No'");

        characters.wantNum = confirm("Does your password want numbers?\n" + 
                                      "OK for 'Yes'\n" + 
                                      "Cancel for 'No'");

        characters.wantSpec = confirm("Does your password want special characters?\n" + 
                                      "OK for 'Yes'\n" + 
                                      "Cancel for 'No'");
      }
    return;
  }
}

function arrayMaker() {
  var upLetterArray = characters.upLetters.split("");
  console.log(upLetterArray);

  var lowLetterArray = characters.lowLetters.split("");
  console.log(lowLetterArray);

  var numberArray = characters.numbers.split("");
  console.log(numberArray);

  var specialArray = characters.specialChar.split("");
  console.log(specialArray);

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

function randomizer() {
  for (let i = 0; i < length.inputLength; i++) {
    var random = Math.floor(Math.random() * masterArray.length);
    passwordArray.push(masterArray[random]);
  }
  console.log(passwordArray);
}

function generatePassword() {
  length.input();
  characters.want();
  arrayMaker();
  randomizer();
  
  var arrayString = passwordArray.join("");
  return arrayString;
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

// TODO: In future, figure out how to loop the entire app without refreshing the page