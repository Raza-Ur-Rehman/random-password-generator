// function validationpassword() {
//     let password = prompt("Enter a password");
//     if (password.length > 8) {
//         console.log("yes ok hai");
//         let email = prompt("Enter your email address");
//         emailValidation(email)
//     }
// }
var display = document.getElementById("display");
let uppercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
let lowercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
let specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "~",
    "`",
];
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let getAll = uppercase + lowercase + specialCharacters + number;

function randomGenerate() {
    let password = " ";
    password += uppercase[Math.floor(Math.random(2) * uppercase.length)];
    password += lowercase[Math.floor(Math.random(2) * lowercase.length)];
    password += specialCharacters[Math.floor(Math.random(2) * specialCharacters.length)];
    password += number[Math.floor(Math.random(2) * number.length)];

    for (let i = 1; i <= pasward.length ; i++) {
        getAll += password[Math.floor(Math.random() * getAll.length)];
        display.innerText = password;
        //  console.log([i]);
    }
}
function copyText() { 
    display.select()
    document.execCommand("display");
} 

function clearText() {
    display.innerText = "";
}
