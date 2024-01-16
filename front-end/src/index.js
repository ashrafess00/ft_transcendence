const apiurl = 'http://127.0.0.1:8000/snippets/'
const app = document.getElementById("app")
fetch(apiurl).then(res => {
    return res.json()
}).then(data => {
    data.map(da => {
        console.log(da.title)
        const p = document.createElement("p")
        p.textContent = da.title
        app.appendChild(p)

    })

    
})

