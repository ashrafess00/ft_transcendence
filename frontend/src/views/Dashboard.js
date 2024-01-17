import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }
    async getHtml() {
        return `
            <h1>hello there</h1>
            <p class="lead">lorem lorem lorem 1</p>
        `;
    }
}