

export default class Login extends HTMLElement {
    constructor(attr) {
        console.log("hai: ", attr);
        super();
        this.attribute = attr;
        this.render();
    }

    connectedCallback() {
        this.render();
    }
    async render() {
        const shadow = this.attachShadow({mode: "open"});
        const app = document.getElementById("app");
        const wrapper = document.createElement("div");
        const title = document.createElement("h1");
        title.innerHTML = "hello a bb Login " + (this.attribute ? this.attribute : "");
        wrapper.appendChild(title);
        shadow.appendChild(wrapper);
        app.innerHTML = "";
        app.appendChild(shadow);
    }
}

customElements.define('login-component', Login);
