import Logout from "../Components/Logout.js";
import { verifyToken } from "../utils/VerfifyUser.js";

export default class Game {
    constructor() {
        this.render();
    }
    async getUserData() {
        const token = localStorage.getItem("jwt-token");
        const userData = localStorage.getItem("user-data");
        
        console.log("token: ", token);
        let data = await fetch("http://localhost:8000/api/current-user/" , {
            headers: {
                Authorization: ('Bearer ' + token),
            }
        })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(erro => {
            throw new Error("hi there");
        })
        return data
    }

    async render() {
        
        let verify = await verifyToken();

        console.log("v: ", verify);
        if (!verify) {
            window.location.href = "/login";
            return;
        }
        let logout = new Logout();
        const data = await this.getUserData();
        const html = `
            ${logout.getHtml()}
            <h1>Hello i am ${data.username}</h1>
        `;

        document.querySelector("#app").innerHTML = html;


        document.getElementById("log-out").addEventListener("click", e => {
            e.preventDefault();
            localStorage.removeItem("jwt-token");
            window.location.href = "/";
        });
    }
}