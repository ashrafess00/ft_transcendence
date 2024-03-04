
// import { routes } from "./src/Routes.js";
import { navigateTo, router } from "./src/utils/navTo.js";
// // // const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


// const router = async () => {
    
//     const potentialMatches = routes.map(route => {
//         return {
//             route,
//             isMatch: location.pathname === route.path
//         }
//     })

//     let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
//     if (!match) {
//         match = {
//             route: routes[0],
//             isMatch: true
//         }
//     }
    

//     const root = document.getElementById('root');
//     const component = new match.route.component(match.route.htmlPath);

//     try {
//         const html = await component.render();
//         root.innerHTML = html;
//         import(match.route.js);
//     }
//     catch(err) {
//         console.log("there is an error");
//     }
// }


window.addEventListener("popstate", router);

// const navigateTo = (url) => {
//     history.pushState(null, null, url);
//     router();
// }

function generateFavIcon() {
    let links = ["public/images/aessaoud.ico",
                 "public/images/kslik.ico",
                 "public/images/hdagdagu.ico",
                 "public/images/ylabrahm.ico",
                 "public/images/yhachami.ico",
                ]
    let link = document.querySelector("link[rel~='icon']");
    let rand = Math.floor(Math.random() * 5);
    link.href = links[rand];

    
}
generateFavIcon();

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        // console.log(e.target);
        if (e.target.matches("[data-nav]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})
