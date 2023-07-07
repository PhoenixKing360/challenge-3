// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a", "b"]
var uppercaseArray = ["A", "B"]
var numbersArray = ["1", "2"]
var specialArray = ["!", "@"]


function generatePassword () {
var myGeneratedPassword = "";
var passwordLength = Number(window.prompt("Choose length of password"));
if (passwordLength >= 8 && passwordLength <= 128){
   var wantsLowercase = window.prompt("Do you want lowercase? y/n");
  var wantsUppercase = window.prompt("Do you want Uppercase? y/n");
   var wantsNumber = window.prompt("Do you want numbers? y/n");
  var wantsSymbols = window.prompt("Do you want special symbols? y/n");
  var completeArray = []
  console.log(wantsLowercase)
if(wantsLowercase.toLowerCase() === "y"){
  completeArray = completeArray.concat(lowercaseArray)
}
if(wantsUppercase.toLowerCase() === "y"){
  completeArray = completeArray.concat(uppercaseArray)
}
if(wantsNumber.toLowerCase() === "y"){
  completeArray = completeArray.concat(numbersArray)
}
if(wantsSymbols.toLowerCase() === "y"){
  completeArray =  completeArray.concat(specialArray)
}
if(completeArray.length > 0){
for(var i = 0; i <= passwordLength; i++){
  var index = Math.floor(Math.random() * passwordLength);
  var randomLetter = completeArray[index];
  myGeneratedPassword += randomLetter
}
}}
if(myGeneratedPassword === ""){
  myGeneratedPassword = "invalid input"
}
return myGeneratedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
