const verifyUrl = "http://localhost:8000/api/token/verify/";
const refreshToken = "http://localhost:8000/api/token/refresh/";


export async function verifyToken() {
    const token = localStorage.getItem("jwt-token");
    const refreshToken = localStorage.getItem("jwt-token-refresh");


    if (token){
        const accessTokenRes = await fetch(verifyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
            })
        });
        if (!accessTokenRes.ok) {
            throw new Error(`Error: status ${res.status}`);
        }
    }
    
    else {
        throw new Error("token not found");
    }

    // console.log("j");
    // if (token) {
    //     //verify if the is valid
    //     fetch("http://localhost:8000/api/token/verify/", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             token: token,
    //         }),
    //     })
    //     .then(res => {
    //         if (!res.ok)
    //             throw new Error(`Error: status ${res.status}`)
    //         return res.json();
    //     })
        // .catch(error => {
        //     console.log("error");
        //     if (refreshToken) {
        //         return fetch("http://localhost:8000/api/token/refresh/", {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 refresh: refreshToken,
        //             })
        //         })
        //         .then(res => {
        //             console.log(res.ok);
        //             if (!res.ok) {
        //                 throw new Error("error frefesh");
        //             }
        //             return res.json();
        //         })
        //         .then(data => {
        //             console.log("hi toekn: " + data.access);
        //             localStorage.setItem("jwt-token", data.access);
        //             return true;
        //         })
        //         .catch(error => {
        //             return false;
        //         })
        //     }
        // })
    // }
    // else {
    //     console.log('hi');
    //     throw new Error("ero");
    // }
}
