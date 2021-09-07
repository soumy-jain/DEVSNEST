function addItem(item) {
    return {
        type: "add-item",
        item: item
    };
}

function removeItem(id) {
    return {
        type: "remove-item",
        id: id
    };
}

function clearAll() {
    return {
        type: "clear-item"
    };
}

export {addItem, removeItem, clearAll};