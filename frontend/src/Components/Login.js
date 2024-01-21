import BackToHome from "./BackToHome.js"

export default class Login {
    constructor() {
    }

    async getHtml() {
        let backToHomeCom = new BackToHome()
        return `
        ${backToHomeCom.getHtml()}
        <div class="container position-absolute top-50 start-50 translate-middle">
            <div class="row">
                <div class="col-lg-6 align-self-center mb-5">
                    <h1>Baby Login here</h1>
                </div>
                <div class="col-lg-6 d-flex">
                    <div class="vr d-none d-lg-block"></div>
                    <div class="container-fluid">
                        <form class="mb-4" action="http://localhost:8000/api/register" method="POST">
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
                        <button type="submit" class="btn btn-primary text-white">Submit</button>
                        </form>
                        <div class="row justify-content-center align-items-center mb-3">
                            <div class="col-5"><hr></div>
                            <div class="col-2 text-center">Or</div>
                            <div class="col-5"><hr></div>
                        </div>
                        <div class="bg-primary text-white p-2 rounded-3 text-center">Login with 42</div>
                    </div>
                </div>
            </div>
        </div>
        `
}
}

