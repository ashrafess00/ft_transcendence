import Login from "./routes/Login.js";
import Home from "./routes/Home.js";
import Register from "./routes/Register.js";
// import Game from "./routes/Game.js";
import Profile from "./routes/Profile.js";

export const routes = [
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
    {
        path:"/game",
        // component: Game
    },
    {
        path: "/profile",
        component: Profile
    }
]