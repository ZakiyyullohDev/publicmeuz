import baseUrl from "./baseurl.js"
import regex from "./regex.js"
import fetch from "./fetch-login.js"
import utils from "./utils-login.js"

const alreadyExistTitle = document.getElementById("alreadyExistTitle")
const passwordErrorText = document.getElementById('passwordErrorText')
const alreadyExistIcon = document.getElementById('alreadyExistIcon')
const emailErrorText = document.getElementById('emailErrorText')
const passwordInput = document.getElementById('passwordInput')
const alreadyExist = document.getElementById("alreadyExist")
const emailInput = document.getElementById('emailInput')
const signInBtn = document.getElementById('signInBtn')

signInBtn.addEventListener('click', async ()=> {
    const allInputsValidation = utils.signUpValidation(emailInput, passwordInput, emailErrorText, passwordErrorText)
    
    if (allInputsValidation !== 200) {
        setTimeout(() => {
            emailInput.classList.remove("error-input")
            passwordInput.classList.remove("error-input")

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
        user_email: emailInput.value,
        user_password: passwordInput.value
    }

    await fetch.fetchFunc(data, alreadyExist, alreadyExistTitle, alreadyExistIcon)
    
})

emailInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        passwordInput.focus()
    }
})

passwordInput.addEventListener("keydown", async (e)=> {
    if (e.key === "Enter") {
        const allInputsValidation = utils.signUpValidation(emailInput, passwordInput, emailErrorText, passwordErrorText)
    
        if (allInputsValidation !== 200) {
            setTimeout(() => {
                emailInput.classList.remove("error-input")
                passwordInput.classList.remove("error-input")

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
            user_email: emailInput.value,
            user_password: passwordInput.value
        }
    
        await fetch.fetchFunc(data, alreadyExist, alreadyExistTitle, alreadyExistIcon)
    }
})