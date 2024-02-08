import BackToHome from "../Components/BackToHome.js"



export default class Login {
    constructor() {
        this.url = "http://localhost:8000/api/token/"
        this.userNameVal = "";
        this.passwordVal = "";
        this.mssg = "";
        this.obj = "hi";
        this.notAuthenticated = false;

        this.render();
    }


    getSpinner() {
        return `
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
            </div>
        `
    }
    
    getLoginInterface() {
        return  `
            <div class="col-lg-6 d-flex" id="login-container">
                <div class="vr d-none d-lg-block"></div>
                <div class="container-fluid">
                <form class="mb-4" action="http://localhost:8000/api/register" method="POST" id="login">
                <div class="mb-3">
                    <label for="userName" class="form-label">userName</label>
                    <input type="text" class="form-control" id="username" name="username">
                    <div id="userNameHelp" class="form-text">something here</div>
                </div>
                <div class="mb-3"> 
                    <label for="userPass" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password">
                    <div id="userPassHelp" class="form-text">don't share your password</div>
                    <div class="text-primary">${this.notAuthenticated ? "you are not authenticated, please try again" : ""}</div>
                    </div>
                <button type="submit" class="btn btn-primary text-white">Submit</button>
                </form>
                <div class="row justify-content-center align-items-center mb-3">
                    <div class="col-5"><hr></div>
                    <div class="col-2 text-center">Or</div>
                    <div class="col-5"><hr></div>
                </div>
                <div class="btn-group bg-primary text-white p-2 rounded-3 text-center mb-3 w-100 justify-content-center">
                    <a class="text-white text-decoration-none text-center" href="#">Login with   <img src="../assets/ylabrahm.ico" style="width:30px;"></a>
                </div>
                <p>don't have an account? <a href="/register" data-link>register here</a></p>
                </div>
            </div>
        `
    }


    
    async render() {
        let backToHomeCom = new BackToHome()
        const html = `
        ${backToHomeCom.getHtml()}
        <div class="container position-absolute top-50 start-50 translate-middle">
            <div class="row">
                <div class="col-lg-6 align-self-center mb-5">
                    <h1>Login here a bb</h1>
                </div>
                ${this.getLoginInterface()}
            </div>
        </div>
        `
        document.querySelector("#app").innerHTML = html;
        
        const form = document.getElementById("login");
        form.addEventListener("submit", e => {
            e.preventDefault();
            let userName = document.getElementById("username").value;
            let userPass = document.getElementById("password").value;
            let loginContainer = document.getElementById("login-container");
            loginContainer.innerHTML = this.getSpinner();

            fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userName,
                    password: userPass,
                }),
            })
            .then(res => {
                if (!res.ok) {
                    this.userNameVal = userName;
                    this.passwordVal = userPass;
                    this.notAuthenticated = true;
                    this.render();
                    console.log("error");
                    throw new Error("waalo");
                }
                return res.json()
            }
            )
            .then(data => {
                localStorage.setItem("jwt-token", data.access);
                localStorage.setItem("jwt-token-refresh", data.refresh);
                window.location.href = "/game";
            })
            .catch(error => {
                console.error("Error lmli7", error);
            });
        })
    }
}

