import utils from './utils.js'
import baseUrl from "./baseurl.js";

let token = localStorage.getItem("user_token") || null

try {

    const response = await fetch(`${baseUrl}/api/dashboard/software/win`, {
        method: "GET",
        headers: {
            "Authorization": token
        }
    })

    let responseData = response.json()

    if (response.status === 200) {
        window.location.href = '/dashboard-second.html'
    }

    if (response.status === 401) {
        utils.handleUIFeedback(false, 'img/un-check.png', 'Unexpected error')
    }
    
    
} catch (error) {
    console.error(error);
    
}
