// Assignment Code
var generateBtn = document.getElementById("generate");


var length = 8-128;
var charset = ["a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","","x","y","z"]
var charset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","","X","Y","Z"]
var charset = ["0","1","2","4","5","6","7","8","9"]retVal = "";
for (var i = 0; <= length; i++)
{ var ranchar = math.random(length);
writePassword += charset(randonNumber, randonNumber +1);
}


// Write password to the #password input// add starter code 
function writePassword() {
  var password = generatePassword(); 
  var passwordText
 
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
