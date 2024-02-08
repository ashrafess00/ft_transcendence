import Logout from "../Components/Logout.js";
import { verifyToken } from "../utils/VerfifyUser.js";


export default class Game {
    constructor() {
        this.render();
    }

    getSpinner() {
        return `
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
            </div>
        `
    }

    async getUserData() {
        const userData = localStorage.getItem("user-data");
        if (userData)
            return JSON.parse(userData);

        const token = localStorage.getItem("jwt-token");
<<<<<<< HEAD:frontend/src/routes/Game.js
        let data = await fetch("http://localhost:8000/api/current-user/" , {
=======
        let data = await fetch("http://0.0.0.0:8000/api/current-user" , {
>>>>>>> to-doffa:frontend/src/src/Components/Game.js
            headers: {
                Authorization: ('Bearer ' + token),
            }
        })
        .then(res => {
            if (!res.ok)
                throw new Error("error to get current user");
            return res.json();
        })
        .then(data => {
            localStorage.setItem("user-data", JSON.stringify(data));
            return data;
        })
        .catch(erro => {
            throw new Error("hi there");
        })
        return data
    }

    async render() {
        
        let verify = await verifyToken();
        if (!verify) {
            window.location.href = "/login";
            return;
        }
        let logout = new Logout();
        const data = await this.getUserData();
        console.log(data);


        const html = `
        ${logout.getHtml()}
            <h1>Salam Alaikoum ana hwa ${data.username}</h1>
            <h6>hnaya fin ghadi nl3bo</h6>
        `;

        document.querySelector("#app").innerHTML = html;


        document.getElementById("log-out").addEventListener("click", e => {
            e.preventDefault();
            localStorage.removeItem("jwt-token");
            window.location.href = "/";
        });
    }
}