export const insertIntoElement = (elementId, element) => {
    const el = document.getElementById(elementId);
    if (el)
        el.innerHTML = element;
}

