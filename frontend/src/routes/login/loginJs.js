const url = "http://localhost:8000/api/token/";
const form = document.getElementById("login");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("username").value;
    const userPass = document.getElementById("password").value;
    const loginContainer = document.getElementById("login-container");
    const fields_warning = document.getElementById('fields-warning');

    if (!userName  || !userPass)
    {
        console.log('e: u ', userName, "e: p: ", userPass);
        if (fields_warning)
            fields_warning.innerText = "fields shouldn't be empty"
        return;
    }

    fetch(url, {
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
            fields_warning.innerText = "username or password aren't correct";
            throw new Error("couldn't log in");
        }
        return res.json();
    })
    .then(token => {
        localStorage.setItem("jwt-token", token.access);
        localStorage.setItem("jwt-token-refresh", token.refresh);
        window.location.href = "/game";
    })
    
})
