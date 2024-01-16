const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = async() => {
    const routes = [
        {path: "/"},
        {path: "/posts"},
        {path:"/posts/:id"},
        {path:"/settings"}
    ]
}