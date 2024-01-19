export default class Home {
    constructor() {

    }
    async getHtml() {
        return `
        <div class="container text-center align-middle mt-auto position-absolute top-50 start-50 translate-middle">
        <h1 class="display-1 text mb-5">Welcome To PingPong</h1>
        <a href="/login" id="login-btn" class="btn btn-success" data-link>Log In with 42</a>
        </div>
        `
    }
}
