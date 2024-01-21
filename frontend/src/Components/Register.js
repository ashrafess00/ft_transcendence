import BackToHome from "./BackToHome.js"

export default class Register {
    constructor() {
    }

    async getHtml() {
        let backToHomeCom = new BackToHome()
        return `
        ${backToHomeCom.getHtml()}
        <div class="container position-absolute top-50 start-50 translate-middle">
            <div class="row">
                <div class="col-lg-6 align-self-center mb-5">
                    <h1>Baby Register here</h1>
                </div>
                <div class="col-lg-6 d-flex">
                    <div class="vr d-none d-lg-block"></div>
                    <form class="container-fluid" action="http://localhost:8000/api/register" method="POST">
                    <div class="mb-3">
                        <label for="userName" class="form-label">UserName</label>
                        <input type="text" class="form-control" id="userName" name="username">
                        <div id="userNameHelp" class="form-text">something here</div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="userName" name="email">
                        <div id="emailHelp" class="form-text">don't share your email a bb</div>
                    </div>
                    <div class="mb-3"> 
                        <label for="userPass" class="form-label">Password</label>
                        <input type="password" class="form-control" id="userPass">
                        <div id="userPassHelp" class="form-text">don't share your password</div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary text-white">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        `
}
}
