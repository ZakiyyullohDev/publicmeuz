import utils from './utils.js'
import baseUrl from "./baseurl.js"

async function checkToken() {
    try {

        const token = localStorage.getItem('user_token') ? localStorage.getItem('user_token') : null

        if (!token) {
            return window.location = '/signin.html'
        }

        const request = await fetch(baseUrl + '/api/dashboard/software/win', {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })
        const response = request.status
        
        if (response != 401) {
            return true
        }

        return window.location = '/signin.html'
    } catch (error) {
        console.log(error);
        
        utils.handleUIFeedback(false, 'img/un-check.png', 'Unexpected error')
    }
}

checkToken()