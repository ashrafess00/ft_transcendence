import { routes } from "./Routes.js";


const gethtml = async (url) => {
    return fetch(url)
    .then((res) => {
        if (res.ok)
            return res.text();
        throw new Error("couldn't fetch the text");
    })
    .then(text => {
        return text;
    })

}

async function  navTo(url) {
    try {
        const html = await gethtml(url);
        history.pushState(null, null, url);
        const app = document.getElementById('root');
        console.log(app);
        app.innerHTML = html;
    }
    catch(e) {
        console.log('there is an error a bb')
    }

}


document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-nav]")) {
            e.preventDefault();
            console.log(e.target.href);
        }
    })
})















