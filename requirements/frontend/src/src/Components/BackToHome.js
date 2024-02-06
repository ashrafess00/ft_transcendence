export default class BackToHome {
    constructor() {
        
    }
    getHtml() {
        return `
        <div class="btn-group mt-3">
            <a href="/" class="btn btn-primary text-white" data-link>
            back to home
            </a>
        </div>
        `
    }
}