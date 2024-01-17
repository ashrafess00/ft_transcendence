import Login from "./views/Login.js"
import Dashboard from "./views/Dashboard.js";


// // const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const navigateTo = url => {
    console.log("url: ", url);
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    console.log("inside router")
    const routes = [
        {path:"/", view: Dashboard},
        {path:"/login", view: Login},
    ]
    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    console.log("match: ", match);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    // document.body.addEventListener("click", e => {
    //     if (e.target.matches("[data-link]")) {
    //         e.preventDefault();
    //         navigateTo(e.target.href);
    //     }
    // })
    console.log("hi")
    let loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", e => {
        e.preventDefault();
        navigateTo(e.target.href);
    })
    // router();
})