import baseUrl from './baseurl.js'

const terCodeCode = document.querySelectorAll('terCodeCode');
const downloadBtn = document.getElementById('downloadBtn');
const authToken = document.querySelector('.auth_token');
const copyBtns = document.querySelectorAll('#copyBtn');

let token = localStorage.getItem("user_token");

copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener('click', (e)=> {
        const code = e.target.parentElement.children[1].textContent.trim()
        navigator.clipboard.writeText(code)
        copyBtn.textContent = 'Copied !'
        setTimeout(() => {
            copyBtn.textContent = 'Copy'
        }, 2000);
    })
})

downloadBtn.addEventListener("click", async () => {
    const link = document.createElement("a");
    try {
        
        const response = await fetch(`${baseUrl}/api/dashboard/software/win`, {
            method: "GET",
            headers: {
                'Authorization': token,
            }
        });
        
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        link.href = objectUrl;
        link.download = 'publicme.exe';
        link.click();
        
        if (response.ok) {
            URL.revokeObjectURL(objectUrl);
            handleUIFeedback(true, "img/check.png", "Successfully Downloaded!");
            return ''
        }
        
        handleUIFeedback(false, "img/un-check.png", "Error: Unauthorized! Please Sign In!");
    } catch (error) {
        console.error(error);
    }
});

function handleUIFeedback(statusInfo, iconSrc, message) {
    alreadyExist.classList.remove("already-error", "already-success");
    alreadyExist.classList.add(statusInfo ? "already-success" : "already-error");
    
    alreadyExistIcon.src = '';
    alreadyExistIcon.src = iconSrc;
    
    alreadyExist.classList.remove("hidden");
    alreadyExist.classList.add("animation");
    alreadyExistTitle.textContent = '';
    alreadyExistTitle.textContent = message;
    
    setTimeout(() => {
        alreadyExist.classList.add("hidden");
    }, 3000);
}

async function getAuthToken() {
    const request = await fetch(baseUrl + '/api/dashboard/userAuthToken', {
        method: 'GET',
        headers: {
            "Authorization": token
        }
    })

    const response = await request.json()

    authToken.textContent = response.auth_token
    
}

getAuthToken()