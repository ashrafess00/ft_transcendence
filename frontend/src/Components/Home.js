export default class Home extends HTMLElement {
    constructor() {
        super();
        // this.connectedCallback();
        this.connectedCallback();
    }
    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        const app = document.getElementById("app");

        const container = document.createElement("div");
        container.setAttribute("class", "container text-center align-middle mt-auto position-absolute top-50 start-50 translate-middle");

        container.innerHTML = 
        `
        <h1 class="display-1 text mb-5">Welcome To PingPong</h1>
         <button class="btn btn-success" data-link>
            <a href="/login" id="login-btn" class="text text-white text-decoration-none" data-link>Log In with 42</a>
        </button>
        `;

        shadow.appendChild(container);
        app.innerHTML = "";
        app.appendChild(shadow);
        console.log("home called");
    }
}

customElements.define('home-component', Home);