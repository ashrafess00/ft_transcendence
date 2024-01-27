import BackToHome from "./BackToHome.js"

export default class Register {
    constructor() {
        this.url = "http://localhost:8000/api/register/"
        this.username = "";
        this.email = "";
        this.password = "";
        this.mssg = "";
    }

    async render() {
        let backToHomeCom = new BackToHome()

        const html = `
        ${backToHomeCom.getHtml()}
        <div class="container position-absolute top-50 start-50 translate-middle">
            <div class="row">
                <div class="col-lg-6 align-self-center mb-5">
                    <h1>Register here a bb</h1>
                </div>
                <div class="col-lg-6 d-flex">
                    <div class="vr d-none d-lg-block"></div>
                    <form class="container-fluid" action="http://localhost:8000/api/register" method="POST" id="register">
                        <div class="mb-3">
                            <label for="username" class="form-label">username</label>
                            <input type="text" class="form-control" id="username" name="username">
                            <div id="usernameHelp" class="form-text">something here</div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email">
                            <div id="emailHelp" class="form-text">don't share your email a bb</div>
                        </div>
                        <div class="mb-3"> 
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password">
                            <div id="passwordHelp" class="form-text">don't share your password</div>
                        </div>
                        <div class="mb-3"> 
                            <label for="confirm_password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirm_password">
                            <div id="confirm_passwordHelp" class="form-text">don't share your password</div>
                        </div>
                        <button type="submit" class="btn btn-primary text-white">Login</button>
                    </form>
                </div>
            </div>
        </div>
        `
        document.querySelector("#app").innerHTML = html;
        const form = document.getElementById("register");
        form.addEventListener("submit", e => {
            e.preventDefault();
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirm_password = document.getElementById("confirm_password").value;
            console.log(username, email, password)
            fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    confirm_password: confirm_password,
                }),
            }).then(
                res => {
                    console.log("==> " ,res)
                }
            )
        })

    }
}