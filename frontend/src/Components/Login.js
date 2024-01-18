

export default class Login extends HTMLElement {
    constructor(attr) {
        console.log("hai: ", attr);
        super();
        this.attribute = attr;
        this.connectedCallback();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        const app = document.getElementById("app");

        const container = document.createElement("div");
        container.setAttribute("class", "container text-center align-middle position-absolute top-50 start-50 translate-middle");

        container.innerHTML = 
        `
        <p clas="lead">Here user will be authenticated o dakshi</p>
        <a href="/" data-link>back to Home</a>
        `;

        shadow.appendChild(container);
        app.innerHTML = "";
        app.appendChild(shadow);
        console.log("home called");
    }
}

customElements.define('login-component', Login);
