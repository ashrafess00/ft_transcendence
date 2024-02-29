const form = document.getElementById("login");

form.addEventListener("submit", e => {
    e.preventDefault();
    const userName = document.getElementById("username").value;
    const userPass = document.getElementById("password").value;
    const loginContainer = document.getElementById("login-container");

    if (userName == '' || userPass == '')
    {
        const fields_warning = document.getElementById('fields-warning');
        if (fields_warning)
            fields_warning.classList.remove('invisible')
            fields_warning.classList.add('visible');
        return;
    }
    console.log("username: ", userName);
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
            throw new Error("waalo");
        }
        return res.json()
    }
    )
    .then(data => {
        // localStorage.setItem("jwt-token", data.access);
        // localStorage.setItem("jwt-token-refresh", data.refresh);
        // window.location.href = "/game";
        console.log('data: ', data.access);
    })
    .catch(error => {
        console.error("Error lmli7", error);
    });
})