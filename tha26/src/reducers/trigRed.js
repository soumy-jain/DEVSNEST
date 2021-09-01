function trigName(state = "", action) {
    if(action.type === "CHANGED_NAME") {
        return action.name;
    }
    return state;
}

function trigEmail(state = "", action) {
    if(action.type === "CHANGED_EMAIL") {
        return action.email;
    }
    return state;
}

export {trigName, trigEmail};