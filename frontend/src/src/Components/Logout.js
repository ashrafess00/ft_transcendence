export default class Logout {
    constructor() {
        
    }
    getHtml() {
        return `
        <div class="btn-group mt-3" id="log-out">
            <a href="/" class="btn btn-primary text-white" data-link>
            Logout
            </a>
        </div>
        `
    }
}