const Routes = [
    {
        path : "/loading",
        func : () => GrabFile("/html/loadbar.html")
    },
]

async function GrabFile(path) {
    const data = await fetch(path).then(data => data.text());
    return (data);
}

function router() {
    const path = window.location.href;
    const foundpath = Routes.find(path, path === Routes)
}