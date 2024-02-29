
import { routes } from "./Routes.js"
// // // const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const router = () => {
    
    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    

    const root = document.getElementById('root');

    // fetch for the component
    fetch(match.route.component)
    .then(res => {
        if (!res.ok)
            throw new Error('on fetching route');
        return res.text();
    })
    .then(html => {
        root.innerHTML = html;

        //load js of the router
        import(match.route.js)
        .then()
        .catch(err => console.log("couldn't fetch js: ", match.route.js));
    })
}

window.addEventListener("popstate", router);

const navigateTo = url => {
    // console.log("url: ", url);
    history.pushState(null, null, url);
    router();
}

function generateFavIcon() {
    let links = ["assets/images/aessaoud.ico",
                 "assets/images/kslik.ico",
                 "assets/images/hdagdagu.ico",
                 "assets/images/ylabrahm.ico",
                 "assets/images/yhachami.ico",
                ]
    let link = document.querySelector("link[rel~='icon']");
    let rand = Math.floor(Math.random() * 5);
    link.href = links[rand];

    
}
generateFavIcon();

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-nav]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
        console.log('hi');
        const l = document.getElementById('test-btn');
        console.log(l);
    })
    console.log('call to router');
    router();
})
