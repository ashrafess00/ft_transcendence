export async function verifyToken() {
    const token = localStorage.getItem("jwt-token");

    const refreshToken = localStorage.getItem("jwt-token-refresh");
    if (token) {
        //verify if the is valid
        return fetch("http://localhost:8000/api/token/verify/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
            }),
        })
        .then(res => {
            if (!res.ok){
                throw new Error(`Error: status ${res.status}`)
            }
            return res.json();
        })
        .then(data => {
            return true;
        })
        .catch(error => {
            console.log("error");
            if (refreshToken) {
                return fetch("http://localhost:8000/api/token/refresh/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        refresh: refreshToken,
                    })
                })
                .then(res => {
                    console.log(res.ok);
                    if (!res.ok) {
                        throw new Error("error frefesh");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log("hi toekn: " + data.access);
                    localStorage.setItem("jwt-token", data.access);
                    return true;
                })
                .catch(error => {
                    return false;
                })
            }
        })
    }
    return false;
}
