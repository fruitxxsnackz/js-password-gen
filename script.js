// Assignment code here

function generatePassword() {
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var numbers = "0123456789";
 var specialchar = "!@#$%^&*()_+-=";

//  Create an empty string thst I can add characters to.
  let space = "";

  // Prompt for a true or false dialogue; if true, then add the confirmed string into the empty string.
let uppercased = window.confirm("Do you want to include uppercase letters?");
if (uppercased === true) {
  space += uppercase;}
let lowercased = window.confirm("Do you want to include lowercase letters?");
if (lowercased === true) {
  space += lowercase;}
let numbered = window.confirm("Do you want to include numbers?");
if (numbered === true) {
  space += numbers;}
let specialchart = window.confirm("Any special characters?");
if (specialchart === true) {
  space += specialchar;}

// If false, then notify the user that they have yet to select any criteria and break the code sequence.
  if (uppercased === false && lowercased === false && numbered === false && specialchart === false) {
  alert("No criteria has been selected")
 return("");
}

  // Prompt user for a custom password length, if the password is greater than or equal to 8 AND less than or equal to 120, then notify user of generating password. Otherwise, alert the user that password does not meet required criteria.
  var passlength = prompt("Length of password? (Between 8-120 characters");
if (passlength >= 8 && passlength <= 120) {
 alert("Generating...");
} else {
  alert("Password has to be in between 8-120 characters.");
} 

let pass = "";
// Use for loop to create a new randomized string called "pass" from our previous string, "space"; also ensures that it meets length requirement. 
for (let i = 0; i < passlength; i++) {
  let passcode = (Math.floor(Math.random() * space.length));
   pass += space[passcode];
}
// Displays new password on screen
 return pass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
