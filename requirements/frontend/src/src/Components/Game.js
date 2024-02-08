import Logout from "./Logout.js";
import { verifyToken } from "./VerfifyUser.js";
export default class Game {
    constructor() {
        
    }
    async setUserData() {
        const token = localStorage.getItem("jwt-token");
        let data = await fetch("http://0.0.0.0:8000/api/current-user" , {
            headers: {
                Authorization: ('Bearer ' + token),
            }
        })
        .then(res => res.json())
        .then(data => {
            return data;
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
        const data = await this.setUserData();
        const html = `
        ${logout.getHtml()}
        <h1>Salam Alaikoum ana ${data.username}</h1>
        `;
        document.querySelector("#app").innerHTML = html;


        document.getElementById("log-out").addEventListener("click", e => {
            e.preventDefault();
            localStorage.removeItem("jwt-token");
            window.location.href = "/";
        });
    }
}