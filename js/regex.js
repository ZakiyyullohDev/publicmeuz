const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{8,32}$/

export default {
    emailRegEx,
    passwordRegEx
}

