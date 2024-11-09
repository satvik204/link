const register = document.getElementById("register");
const login = document.getElementById("login");
const name  = document.getElementById("name");
const email  = document.getElementById("email");
const code  = document.getElementById("code");
const password  = document.getElementById("password");
var think = 0;
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

function validateDateOfBirth(date) {
    // Regular expression to check if the format is DD/MM/YYYY
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    
    // Check if it matches the format
    if (!datePattern.test(date)) {
        return false;
    }

    // Parse the day, month, and year
    const [day, month, year] = date.split('/').map(Number);

    // Check if the date is valid by creating a Date object
    const dateObj = new Date(year, month - 1, day);
    if (
        dateObj.getFullYear() !== year ||
        dateObj.getMonth() !== month - 1 ||
        dateObj.getDate() !== day
    ) {
        return false;
    }

    // Calculate the maximum date limit (100 years ago)
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());

    // Ensure the date is not more than 100 years in the past
    return dateObj >= minDate;
}

passwordInput.addEventListener("input", () => {
    console.log(passwordInput.value);
    
    if (validatePassword(passwordInput.value)) {
        passwordInput.classList.add("valid");
        think+=1;
    } else {
        passwordInput.classList.remove("valid");
    }
});

code.addEventListener('input',() => {
    if (validateDateOfBirth(code.value)) {
        code.classList.add("valid");
        think+=1;
    } else {
        code.classList.remove("valid");
    }
})

login.addEventListener('click',() =>{ 
    location.replace("./login.html")
})


    const remember = localStorage.getItem("remember") === "true";


        
        // Store data in localStorage
        
     if (remember) {
        location.href = './dash.html';
     }
     else{
        register.addEventListener("click", () => {
       if(validatePassword(passwordInput.value) && 
       validateDateOfBirth(code.value) && 
       email.value && 
       name.value){
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('code', code.value);
        location.href = './login.html';
        alert('Registration Successful! Kindly log in to continue.');
       }    else{
        alert("Please enter correct details.");
      }
       });
       }
  
    
