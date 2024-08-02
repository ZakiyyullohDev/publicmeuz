import baseUrl from "./baseurl.js"

const fetchFunc = async (data, alreadyExist, alreadyExistTitle, alreadyExistIcon) => {
    try {
        
        const response = await fetch(`${baseUrl}/api/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        const responseData = await response.json()
        
        if (response.status === 201) {
            // add class
            alreadyExist.classList.remove("already-error")
            alreadyExist.classList.add("already-success")
            // add class

            // change error icon
            alreadyExistIcon.src = "img/check-one.png" 
            // change error icon 
            
            alreadyExist.classList.remove("hidden")
            alreadyExist.classList.add("animation")
            alreadyExistTitle.textContent = responseData.message
            
            // all inputs value === ''
            
            firstNameInput.value = ''
            lastNameInput.value = ''
            emailInput.value = ''
            passwordInput.value = ''
            
            // all inputs value === ''
            
            setTimeout(() => {
                alreadyExist.classList.remove("animation")
            }, 5000);
            
            // go to login.html
            setTimeout(() => {
                window.location.href = 'signin.html'
            }, 1500);
            // go to login.html
            
            return ''
        }
        
        if (responseData.message.includes("Email already exists")) {
            // add class
            alreadyExist.classList.remove("already-success")
            alreadyExist.classList.add("already-error")
            // add class

            // change error icon
            alreadyExistIcon.src = "img/un-check.png" 
            // change error icon 
            
            alreadyExist.classList.remove("hidden")
            alreadyExist.classList.add("animation")
            alreadyExistTitle.textContent = responseData.message
            
            setTimeout(() => {
                alreadyExist.classList.remove("animation")
            }, 5000);
        }
        
    } catch (error) {
        console.error(error)

        alreadyExist.classList.remove("already-success")
        alreadyExist.classList.add("already-error")

        // change error icon
        alreadyExistIcon.src = "img/un-check.png" 
        // change error icon 

        alreadyExist.classList.remove("hidden")
        alreadyExist.classList.add("animation")
        alreadyExistTitle.textContent = "Please Try Again In A Few Minutes!"

    }
}

export default {
    fetchFunc
}
