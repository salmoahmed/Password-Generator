var generatedPassword = "";
function gPassword(){
var pLength = document.getElementById("passwordLength").value
var characterSet = "";
if (document.getElementById("specialChecked").checked == true){
characterSet = characterSet + "!@#$%^&*()!@#$%^&*()!@#$%^"
}
if (document.getElementById("numericChecked").checked == true){
characterSet = characterSet + "12345678901234567890123456"
}
if (document.getElementById("lowercaseChecked").checked == true){
characterSet = characterSet + "qwertyuiopasdfghjklzxcvbnm"
}
if (document.getElementById("uppercaseChecked").checked == true){
characterSet = characterSet + "QWERTYUIOPASDFGHJKLZXCVBNM"
}
var specialSet = "!@#$%^&*()"
var numericSet = "1234567890"
var lowercaseSet = "qwertyuiopasdfghjklzxcvbnm"
var uppercaseSet = "QWERTYUIOPASDFGHJKLZXCVBNM"
var passwordCheckarr = [];
var passwordCheck = [];
do{
passwordCheckarr = [];
passwordCheck = [];
generatedPassword = '';
for (var i = 0; i < parseInt(pLength); ++i) {
generatedPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
}
console.log(generatedPassword);
if(document.getElementById("specialChecked").checked == true){
for(let gpwi = 0; gpwi < pLength; gpwi++){
for(let seti = 0; seti < specialSet.length; seti++){
if(generatedPassword.charAt(gpwi) == specialSet.charAt(seti)){
passwordCheckarr.push("true");
}
}
}
if(passwordCheckarr.includes("true") == true){
passwordCheck.push("true");
}
else{
passwordCheck.push("false");
}
}
console.log(passwordCheck);
console.log("Check Results of Generated Password: " + passwordCheckarr);
console.log("Current Results of all checks: " + passwordCheck);
// --------- Each section below is a check for their own character set -----------
if(document.getElementById("numericChecked").checked == true){
var passwordCheckarr = [];
for(let gpwi = 0; gpwi < pLength; gpwi++){
for(let seti = 0; seti < numericSet.length; seti++){
if(generatedPassword.charAt(gpwi) == numericSet.charAt(seti)){
passwordCheckarr.push("true");
}
}
}
if(passwordCheckarr.includes("true") == true){
passwordCheck.push("true");
}
else{
passwordCheck.push("false");
}
}
console.log(passwordCheck);
console.log("Check Results of Generated Password: " + passwordCheckarr);
console.log("Current Results of all checks: " + passwordCheck);
if(document.getElementById("lowercaseChecked").checked == true){
var passwordCheckarr = [];
for(let gpwi = 0; gpwi < pLength; gpwi++){
for(let seti = 0; seti < lowercaseSet.length; seti++){
if(generatedPassword.charAt(gpwi) == lowercaseSet.charAt(seti)){
passwordCheckarr.push("true");
}
}
}
if(passwordCheckarr.includes("true") == true){
passwordCheck.push("true");
}
else{
passwordCheck.push("false");
}
}
console.log(passwordCheck);
console.log("Check Results of Generated Password: " + passwordCheckarr);
console.log("Current Results of all checks: " + passwordCheck);
// Checks every character in the generated password if it contains at least 1 uppercase character
if(document.getElementById("uppercaseChecked").checked == true){
var passwordCheckarr = [];
for(let gpwi = 0; gpwi < pLength; gpwi++){
for(let seti = 0; seti < uppercaseSet.length; seti++){
if(generatedPassword.charAt(gpwi) == uppercaseSet.charAt(seti)){
passwordCheckarr.push("true");
}
}
}
if(passwordCheckarr.includes("true") == true){
passwordCheck.push("true");
}
else{
passwordCheck.push("false");
}
}
console.log(passwordCheck);
console.log("Check Results of Generated Password: " + passwordCheckarr);
console.log("Current Results of all checks: " + passwordCheck);
console.log(passwordCheck.includes("false"));
}while(passwordCheck.includes("false") == true)
document.getElementById("displayPassword").value = generatedPassword;
}



