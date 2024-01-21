export default class Home {
    constructor() {
        
    }

    async getData() {
        let data = await fetch("http://localhost:8000/api/data-list").then(res => res.json()).then(data => data)
        return  data
    }

    async getHtml() {
        return `
        <div class="container text-center align-middle mt-auto position-absolute top-50 start-50 translate-middle">
            <h1 class="display-1 text mb-5">Welcome To PingPong</h1>
            <a href="/login" id="login-btn" class="btn btn-primary px-3" data-link>Log In</a>
        </div>
    `;
    }
}
