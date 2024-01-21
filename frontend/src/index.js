import Login from "./Components/Login.js"
import Home from "./Components/Home.js"
import Register from "./Components/Register.js"

// // // const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const router = async() => {
    
    const routes = [
        {
            path:"/",
            component: Home
        },
        {
            path:"/login",
            component: Login
        },
        {
            path:"/register",
            component: Register
        },
    ]
    
    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        }
    })

    // console.log(potentialMatches);
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    // console.log(match);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    // let el = document.createElement("login-component");
    
    const component = new match.route.component();
    document.querySelector("#app").innerHTML = await component.getHtml();

    let l = document.getElementById("userName");
    console.log(l)
    if (l) {
        l.addEventListener('input', e => {
            console.log("hi there");
        })
    }
}

window.addEventListener("popstate", router);

const navigateTo = url => {
    // console.log("url: ", url);
    history.pushState(null, null, url);
    router();
}

function generateFavIcon() {
    let links = ["assets/aessaoud.ico",
                 "assets/kslik.ico",
                 "assets/hdagdagu.ico",
                 "assets/ylabrahm.ico",
                 "assets/yhachami.ico",
                ]
    let link = document.querySelector("link[rel~='icon']");
    let rand = Math.floor(Math.random() * 5);
    link.href = links[rand];

    
}
generateFavIcon();

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    let l = document.getElementById("userName");
    console.log(l)
    if (l) {
        l.addEventListener('input', e => {
            console.log("hi there");
        })
    }
    
    router();
    console.log("hidd");
})
