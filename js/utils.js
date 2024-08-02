import regex from "./regex.js"

function signUpValidation(firstNameInput, lastNameInput, emailInput, passwordInput, nameErrorText, lastNameErrorText, emailErrorText, passwordErrorText) {
    firstNameInput.classList.remove("error-input")
    lastNameInput.classList.remove("error-input")
    emailInput.classList.remove("error-input")
    passwordInput.classList.remove("error-input")
    
    nameErrorText.style.opacity = 0
    nameErrorText.textContent = 'error text'
    nameErrorText.classList.remove("error-text")
    
    lastNameErrorText.style.opacity = 0
    lastNameErrorText.textContent = 'error text'
    lastNameErrorText.classList.remove("error-text")
    
    emailErrorText.style.opacity = 0
    emailErrorText.textContent = 'error text'
    emailErrorText.classList.remove("error-text")
    
    passwordErrorText.style.opacity = 0
    passwordErrorText.textContent = 'error text'
    passwordErrorText.classList.remove("error-text")

    if (firstNameInput.value.trim() === '') {
        firstNameInput.classList.add("error-input")
        nameErrorText.style.opacity = 100
        nameErrorText.classList.add("error-text")
        nameErrorText.textContent = "Please Enter Your First Name!"
        return ''
    }

    if (lastNameInput.value.trim() === '') {
        lastNameInput.classList.add("error-input")
        lastNameErrorText.style.opacity = 100
        lastNameErrorText.classList.add("error-text")
        lastNameErrorText.textContent = 'Please Enter Your Last Name!'
        return ''
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add("error-input")
        emailErrorText.style.opacity = 100
        emailErrorText.classList.add("error-text")
        emailErrorText.textContent = 'Please Enter Your Email!'
        return ''
    }

    if (!emailInput.value.match(regex.emailRegEx)) {
        emailInput.classList.add("error-input")
        emailErrorText.style.opacity = 100
        emailErrorText.classList.add("error-text")
        emailErrorText.textContent = 'Please Enter Your Email Like This Example! E.G: example@gmail.com'
        return ''
    }

    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add("error-input")
        passwordErrorText.style.opacity = 100
        passwordErrorText.classList.add("error-text")
        passwordErrorText.textContent = 'Please Enter Your Password!'
        return ''
    }

    if (!passwordInput.value.match(regex.passwordRegEx)) {
        passwordInput.classList.add("error-input")
        passwordErrorText.style.opacity = 100
        passwordErrorText.classList.add("error-text")
        passwordErrorText.textContent = 'Your password must contain at least 1 uppercase and 1 lowercase letter and 1 special character and be at least 8 characters long.'
        return ''
    }

    return 200
}

export default {
    signUpValidation
}
