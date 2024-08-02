import baseUrl from "./baseurl.js"
import regex from "./regex.js"
import fetch from "./fetch.js"
import utils from "./utils.js"

const alreadyExistTitle = document.getElementById('alreadyExistTitle')
const lastNameErrorText = document.getElementById('lastNameErrorText')
const passwordErrorText = document.getElementById('passwordErrorText')
const alreadyExistIcon = document.getElementById('alreadyExistIcon')
const emailErrorText = document.getElementById('emailErrorText')
const firstNameInput = document.getElementById('firstNameInput')
const nameErrorText = document.getElementById('nameErrorText')
const passwordInput = document.getElementById('passwordInput')
const lastNameInput = document.getElementById('lastNameInput')
const alreadyExist = document.getElementById("alreadyExist")
const emailInput = document.getElementById('emailInput')
const signUpBtn = document.getElementById('signUpBtn')

const userTokenSetStorage = (userToken) => {
    localStorage.setItem("user_token", JSON.stringify(userToken))
}

signUpBtn.addEventListener('click', async ()=> {
    const allInputsValidation = utils.signUpValidation(firstNameInput, lastNameInput, emailInput, passwordInput, nameErrorText, lastNameErrorText, emailErrorText, passwordErrorText)
    
    if (allInputsValidation !== 200) {
        setTimeout(() => {
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
        }, 5000);
        return true;
    }
    
    const data = {
        user_first_name: firstNameInput.value,
        user_last_name: lastNameInput.value,
        user_email: emailInput.value,
        user_password: passwordInput.value
    }

    fetch.fetchFunc(data, alreadyExist, alreadyExistTitle, alreadyExistIcon)
    
})

firstNameInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        lastNameInput.focus()
    }
})
lastNameInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        emailInput.focus()
    }
})
emailInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        passwordInput.focus()
    }
})
passwordInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        const allInputsValidation = utils.signUpValidation(firstNameInput, lastNameInput, emailInput, passwordInput, nameErrorText, lastNameErrorText, emailErrorText, passwordErrorText)
    
        if (allInputsValidation !== 200) {
            setTimeout(() => {
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
            }, 5000);
            return true;
        }
        
        const data = {
            user_first_name: firstNameInput.value,
            user_last_name: lastNameInput.value,
            user_email: emailInput.value,
            user_password: passwordInput.value
        }
    
        fetch.fetchFunc(data, alreadyExist, alreadyExistTitle, alreadyExistIcon)
    }
})
