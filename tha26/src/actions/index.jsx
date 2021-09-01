function changeName(name) {
    return {
        type: "CHANGED_NAME",
        name: name
    }
}

function changeEmail(email) {
    return {
        type: "CHANGED_EMAIL",
        email : email
    }
}

export {changeName, changeEmail};