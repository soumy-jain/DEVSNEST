function main(state=[],action) {
    if(action.type==="add-item") {
        return [...state,action.item];
    } else if(action.type==="remove-item") {
        return state.filter((item, index) => index!==action.id);
    }
    else if(action.type==="clear-item") {
        return [];
    }
    return state;
}

export default main;