import AbstractView from "./AbstractView.js";

export default class Login extends AbstractView {
    constructor() {
        super();
        this.setTitle("Login");
    }
    async getHtml() {
        return `
            <h1 class='display-1'>Login Page</h1>
        `
    }
}