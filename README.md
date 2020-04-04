# Password-Generator
//DOM elements


const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('result');
const uppercaseEl = document.getElementById('result');
const lowercaseEl = document.getElementById('result');
const numberEl = document.getElementById('result');
const symbolsEl = document.getElementById('result');
const generateEl = document.getElementById('result');



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomsymbols

}
// method to generate a password aftering listening for the click 

generateEl.addEventListener('click', () =>{
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numberEl.checked
  const hasSymbols = symbolsEl.checked
  

// generated password to show up on screen 
  resultEl.innerText= generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols,
    length
  );
  });

// generate password fucntion 
function generatePassword( lower,upper, number, symbols,length) {

var generatePassword = '';

const typesCount= lower + upper + number + symbols; 

// filtering out unchecked items , looping over length call geenrator function for each type
const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(

  item => Object.values(item)[0]);

  if (typesCount === 0) {
  return '';
  }
  for( var i = 0; i < length; i += typesCount) { 
    typesArr.forEach(type => { 
      const funcName = Objects.keys(type)[0];
      
      generatePassword += randomFunc[funcName]();
    });
  }
  //adding final password to pw var and return 
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

//generator fucntion to get a random lower & uppercase letters, & numbers & symbols

function getRandomLower(){
 return String.fromCharCode(Math.floor(Math.random() *26) + 97 );

}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() *26) + 65 );
 
 }

 function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48 );
 
 }
 function getRandomsymbols(){
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random() * symbols.length)];
 
 }
