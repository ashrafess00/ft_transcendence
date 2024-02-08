function getItemFromLs(el) {
    const item = localStorage.getItem(el);
    if (!item)
        throw new Error("element not found");
}

function setItemToLs(el) {
    localStorage.setItem(el);
}

function deleteItemFromLs(el) {
    localStorage.removeItem(el);
}