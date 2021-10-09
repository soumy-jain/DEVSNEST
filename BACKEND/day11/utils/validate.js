const emailValidate = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    return re.test(email);
}

const passwordValidate = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    re.test(password);
}

module.exports = {
    emailValidate,
    passwordValidate
};  