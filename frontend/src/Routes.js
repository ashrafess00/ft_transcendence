// import Login from "./routes/Login.js";
// import Home from "./routes/Home.js";
import Register from "./routes/Register.js";
// import Game from "./routes/Game.js";
import Profile from "./routes/Profile.js";

export const routes = [
    {
        path:"/",
        component: "./routes/home/home.html",
        js: "./routes/home/home.js",
    },
    {
        path:"/login",
        component: "./routes/login/login.html",
        js: "./routes/login/login.js",
    },
    {
        path:"/register",
        component: "./routes/register/register.html",
        js: "./routes/register/register.js",
    },
    {
        path:"/game",
        // component: Game
    },
    {
        path:"/profile",
        component: Profile
    }
]