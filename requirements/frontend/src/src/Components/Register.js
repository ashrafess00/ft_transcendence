import BackToHome from "./BackToHome.js";

export default class Register {
    constructor() {
        this.url = "http://0.0.0.0:8000/api/register/";
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirm_password = "";  
        this.message = "";
    }

    async render() {
        let backToHomeCom = new BackToHome();

        const html = `
        ${backToHomeCom.getHtml()}
        <div class="container position-absolute top-50 start-50 translate-middle">
            <div class="row">
                <div class="col-lg-6 align-self-center mb-5">
                    <h1>Register here a bb</h1>
                </div>
                <div class="col-lg-6 d-flex">
                    <div class="vr d-none d-lg-block"></div>
                    <form class="container-fluid" action="http://0.0.0.0:8000/api/register" method="POST" id="register">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username" required>
                            <div id="usernameHelp" class="form-text">Enter your username</div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                            <div id="emailHelp" class="form-text">Enter your email</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required>
                            <div id="passwordHelp" class="form-text">Enter your password</div>
                        </div>
                        <div class="mb-3">
                            <label for="confirm_password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirm_password" required>
                            <div id="confirm_passwordHelp" class="form-text">Confirm your password</div>
                        </div>
                        <div id="messageContainer"></div>

                        <button type="submit" class="btn btn-primary text-white">Register</button>
                    </form>
                </div>
            </div>
        </div>
        `;

        document.querySelector("#app").innerHTML = html;
        const form = document.getElementById("register");
        form.addEventListener("submit", async e => {
            e.preventDefault();
            this.username = document.getElementById("username").value;
            this.email = document.getElementById("email").value;
            this.password = document.getElementById("password").value;
            this.confirm_password = document.getElementById("confirm_password").value;
            
            const response = await fetch(this.url, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                }),
            });
            const data = await response.json();
            if (!response.ok)
            {
                console.log(data.error)
                this.message = data.error;
            }
            else
            {
                console.log(data.status)
                this.message = data.status;
            }

            messageContainer.innerHTML = `<p>${this.message}</p>`;

        });

    }
}
