import regex from "./regex.js"

function signUpValidation(emailInput, passwordInput) {
    emailInput.classList.remove("error-input")
    passwordInput.classList.remove("error-input")

    emailErrorText.style.opacity = 0
    emailErrorText.textContent = 'error text'
    emailErrorText.classList.remove("error-text")
    
    passwordErrorText.style.opacity = 0
    passwordErrorText.textContent = 'error text'
    passwordErrorText.classList.remove("error-text")
    
    if (emailInput.value.trim() === '') {
        emailErrorText.style.opacity = 100
        emailInput.classList.add("error-input")
        emailErrorText.classList.add("error-text")
        emailErrorText.textContent = 'Please Enter Your Email!'
        return ''
    }

    if (!emailInput.value.match(regex.emailRegEx)) {
        emailErrorText.style.opacity = 100
        emailInput.classList.add("error-input")
        emailErrorText.classList.add("error-text")
        emailErrorText.textContent = 'Please Enter Your Email Like This Example! E.G: example@gmail.com'
        return ''
    }
    
    if (passwordInput.value.trim() === '') {
        passwordErrorText.style.opacity = 100
        passwordInput.classList.add("error-input")
        passwordErrorText.classList.add("error-text")
        passwordErrorText.textContent = 'Please Enter Your Password!'
        return ''
    }

    if (!passwordInput.value.match(regex.passwordRegEx)) {
        passwordErrorText.style.opacity = 100
        passwordInput.classList.add("error-input")
        passwordErrorText.classList.add("error-text")
        passwordErrorText.textContent = 'Your password must contain at least 1 uppercase and 1 lowercase letter and 1 special character and be at least 8 characters long.'
        return ''
    }

    return 200
}

export default {
    signUpValidation
}