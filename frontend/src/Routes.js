// import Login from "./routes/Login.js";
// import Home from "./routes/Home.js";
import Register from "./routes/Register.js";
// import Game from "./routes/Game.js";
import Profile from "./routes/Profile.js";
import Login from "./routes/login/Login.js"
import Home from "./routes/home/Home.js/index.js"
import Game from "./routes/game/game.js";

export const routes = [
    {
        path:"/",
        htmlPath: "./routes/home/home.html",
        js: "./routes/home/homeJs.js",
        component: Home,
    },
    {
        path:"/login",
        htmlPath: "./routes/login/login.html",
        js: "./routes/login/loginJs.js",
        component: Login,
    },
    {
        path:"/register",
        component: "./routes/register/register.html",
        js: "./routes/register/register.js",
    },
    {
        path:"/game",
        htmlPath: "./routes/game/game.html",
        js: "./routes/game/gameJs.js",
        component: Game,
    },
    {
        path:"/profile",
        component: Profile
    }
]