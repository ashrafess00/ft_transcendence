import { verifyToken } from "../../utils/VerfifyUser.js";

class Game {
    constructor(path) {
        this.path = path;
    }

    async render() {
        try {
            await verifyToken();
            return fetch(this.path)
            .then(res => {
                if (!res.ok)
                    throw new Error("couldn't fetch route");
                return res.text();
            })
        }
        catch(err) {
            window.location.href = "/login";
            localStorage.clear();
        }


    }
}

export default Game;