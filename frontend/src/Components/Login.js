

export default class Login {
    constructor() {
    }

    async getHtml() {
        return `
        <div>
        <a href="/" data-link>
        back to home
        </a>
        </div>
        <div class="container text-center align-middle position-absolute top-50 start-50 translate-middle">
        <div class="container-fluid w-50">
        <form action="http://localhost:8000/api/register" method="POST">
        <div class="mb-3">
            <label for="userName" class="form-label">UserName</label>
            <input type="text" class="form-control" id="userName" name="username">
            <div id="userNameHelp" class="form-text">something here</div>
        </div>
        <div class="mb-3"> 
            <label for="userPass" class="form-label">Password</label>
            <input type="password" class="form-control" id="userPass">
            <div id="userPassHelp" class="form-text">don't share your password</div>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
        </form>
        <p class="lead mt-3">don't have an account? <a href="#">Register Here</a></p>
        </div>
    `
}
}

