import { routes } from "../Routes.js";

export const router = async () => {
    
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
    const component = new match.route.component(match.route.htmlPath);

    try {
        const html = await component.render();
        root.innerHTML = html;
        import(match.route.js);
    }
    catch(err) {
        console.log("there is an error");
    }
}

export const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}