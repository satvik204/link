const register = document.getElementById("register");
const login = document.getElementById("login");
const email  = document.getElementById("email");
const password  = document.getElementById("password");
const remember = document.getElementById("Remember");

function showhidden() {
    const password = document.getElementById("password");
    if (password.type==="password") {
        password.type="text";

    }else{
        password.type="password";

    }
    document.getElementById("input-icon").classList.toggle("ri-eye-line");
    document.getElementById("input-icon").classList.toggle("ri-eye-off-line");
    
}

const passwordInput = document.getElementById("password");


function validatePassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8;

    // Debugging output
    console.log("Uppercase:", hasUppercase);
    console.log("Lowercase:", hasLowercase);
    console.log("Number:", hasNumber);
    console.log("Symbol:", hasSymbol);
    console.log("Valid length:", isValidLength);

    return hasUppercase && hasLowercase && hasNumber && hasSymbol && isValidLength;
}

passwordInput.addEventListener("input", () => {
    console.log(passwordInput.value);
    
    if (validatePassword(passwordInput.value)) {
        passwordInput.classList.add("valid");
    } else {
        passwordInput.classList.remove("valid");
    }
});


const rememberme = localStorage.getItem("remember") === "true";


        
// Store data in localStorage
register.addEventListener('click',() => {
    location.href = "./register.html";
})
if (rememberme) {
location.href = './dash.html';
}
else{
login.addEventListener('click',() => {
    console.log(email.value);
    console.log(localStorage.getItem("email"));
    console.log(password.value);
    console.log(localStorage.getItem("password"));
    if (remember.checked) {
        localStorage.setItem("remember", "true");
    } else {
        localStorage.removeItem("remember");  // Remove "remember me" if unchecked
    }


if (email.value === localStorage.getItem("email") && password.value === localStorage.getItem("password")) {

    location.href = './dash.html';
    alert("Login successful");


}else{

}
})

}