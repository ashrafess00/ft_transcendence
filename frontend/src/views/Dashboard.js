import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }
    async getHtml() {
        return `
            <h1>hello there</h1>
            <p class="lead">wanna see <a href="/about" data-link>about</a></p>
        `;
    }
}