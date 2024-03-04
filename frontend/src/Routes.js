import Register from "./routes/register/Register.js";
import Profile from "./routes/Profile.js";
import Login from "./routes/login/Login.js";
import Home from "./routes/home/Home.js";
import Game from "./routes/game/Game.js";

export const routes = [
    {
        path:"/",
        htmlPath: "./src/routes/home/home.html",
        js: "/src/routes/home/homeJs.js",
        component: Home,
    },
    {
        path:"/login",
        htmlPath: "./src/routes/login/login.html",
        js: "/src/routes/home/homeJs.js",
        component: Login,
    },
    {
        path:"/register",
        htmlPath: "./src/routes/register/register.html",
        js: "/src/routes/register/registerJs.js",
        component: Register,
    },
    {
        path:"/game",
        htmlPath: "./src/routes/game/game.html",
        js: "/src/routes/game/gameJs.js",
        component: Game,
    },
    {
        path:"/profile",
        component: Profile
    }
]