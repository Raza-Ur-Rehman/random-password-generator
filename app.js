// function validationpassword() {
//     let password = prompt("Enter a password");
//     if (password.length > 8) {
//         console.log("yes ok hai");
//         let email = prompt("Enter your email address");
//         emailValidation(email)
//     }
// }
let passwordStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
let password = "";

function randomGenerate() {
    let display = document.getElementById("display");
    password = "";
    // password += passwordStr[Math.floor(Math.random(8) * passwordStr.length)];

    for (let i = 0; i <= 7 ; i++) {
        // passwordStr += password[Math.floor(Math.random(8) * passwordStr.length)];
        // display.innerText = password;
        let genRandom = passwordStr[Math.floor(Math.random() * passwordStr.length)];
        password += genRandom;
    }
    display.innerText = password;
}
function copy(){
    navigator.clipboard.writeText(display.innerText); 
}

function clearText() {
    display.innerText = "";
}
