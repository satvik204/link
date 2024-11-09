const forgot = document.getElementById("forgot");
const login = document.getElementById("login");
const email  = document.getElementById("email");
const code  = document.getElementById("code");



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
code.addEventListener('input',() => {
    if (validateDateOfBirth(code.value)) {
        code.classList.add("valid");
    } else {
        code.classList.remove("valid");
    }
})

login.addEventListener('click',() =>{ 
    location.replace("./login.html")
})

forgot.addEventListener('click',() => {


if (email.value === localStorage.getItem("email") && code.value === localStorage.getItem("code")) {

    location.href = './login.html';
    alert("The password is: " + localStorage.getItem("password"));


}else{

}
})