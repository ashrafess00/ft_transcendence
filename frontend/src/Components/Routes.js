import Login from "./Login.js"
import Home from "./Home.js"
import Register from "./Register.js"
import Game from "./Game.js"
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
        component: Game
    }
]