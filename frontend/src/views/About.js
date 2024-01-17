import AbstractView from "./AbstractView.js";

export default class About extends AbstractView {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>hello i am about</h1>
        `
    }
}