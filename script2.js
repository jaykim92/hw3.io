// Grab DOM elements
var generateBtn = document.querySelector("#generate");
var yourPw = document.querySelector("#password");

// set variables
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var lowerCase = `abcdefghijklmnopqrstuvwxyz`;
var numbers = `0123456789`;
var symbols = `!@#$%^&*(){}[]=<>/.,`;

// ask for user input at the start of the page
var pwLengthInput = document.querySelector("#length");
var upperCaseInput = document.querySelector("#upper");
var lowerCaseInput = document.querySelector("#lower");
var numberInput = document.querySelector("#number");
var symbolInput = document.querySelector("#symbol");

// default password generated is going to be upper case, if the boxes are checked, then we concatonate and mix it in with defaul upper case
// if the check box is not clicked, then we do not concatonate
generateBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var characters = ``;
    (upperCaseInput.checked) ? characters += upperCase : ``;
    (lowerCaseInput.checked) ? characters += lowerCase : ``;
    (numberInput.checked) ? characters += numbers : ``;
    (symbolInput.checked) ? characters += symbols : ``;

    yourPw.value = password(pwLengthInput.value, characters);
});


// make function to grab random character. pass in upperCase through the characters parameter that is a blank variable
// make a for loop that keeps grabbing random random characters until the length, which is decided by the user
function password(charLength, characters) {
    var pwd = "";
    for (var i = 0; i < charLength; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
