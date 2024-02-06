export default class Home {
    constructor() {
        this.render();
    }

    async getData() {
        let data = await fetch("http://localhost:8000/api/data-list").then(res => res.json()).then(data => data)
        return  data
    }

    async render() {
        const html =  `
        <div class="container text-center align-middle mt-auto position-absolute top-50 start-50 translate-middle">
            <h1 class="display-1 text mb-5">Welcome To PingPong</h1>
            <a href="/login" id="login-btn" class="btn btn-primary px-3 text-decoration-none text-white" data-link>Log In</a>
        </div>
    `;
    
    document.querySelector("#app").innerHTML = html;
    }
}
