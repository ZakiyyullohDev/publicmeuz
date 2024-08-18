import baseUrl from "./baseurl.js"

const userTokenSetStorage = (userToken) => {
    localStorage.setItem("user_token", userToken)
}

const fetchFunc = async (data, alreadyExist, alreadyExistTitle, alreadyExistIcon) => {
    try {
        
        const response = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        const responseData = await response.json()
        
        if (response.status === 200) {
            // add class
            alreadyExist.classList.remove("already-error")
            alreadyExist.classList.add("already-success")
            // add class
            
            // change error icon
            alreadyExistIcon.src = "img/check.png" 
            // change error icon 
            
            alreadyExist.classList.remove("hidden")
            alreadyExist.classList.add("animation")
            alreadyExistTitle.textContent = responseData.message

            userTokenSetStorage(responseData.token)
            
            // all inputs value === ''
            
            emailInput.value = ''
            passwordInput.value = ''
            
            // all inputs value === ''
            
            setTimeout(() => {
                alreadyExist.classList.remove("animation")
            }, 5000);
            
            // go to login.html
            setTimeout(() => {
                window.location.href = 'dashboard-second.html'
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
            return ''
        }
        
        if (responseData.message.includes("Wrong login or password")) {
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
            return ''
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
