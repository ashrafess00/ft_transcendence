export default class Profile {
    constructor() {
        this.racketColoursId = [{
            id: "r-red",
            style: "width:25px;height:25px;background-color:red",
            selected: 0,
        },
        {
            id: "r-blue",
            style: "width:25px;height:25px;background-color:blue",
            selected: 0,
        },
        {
            id: "r-green",
            style: "width:25px;height:25px;background-color:green",
            selected: 0,
        }];
        
        this.ballColorsId = [{
            id: "b-red",
            style: "width:25px;height:25px;background-color:red",
            selected: 0,
        },
        {
            id: "b-blue",
            style: "width:25px;height:25px;background-color:blue",
            selected: 0,
        },
        {
            id: "b-green",
            style: "width:25px;height:25px;background-color:green",
            selected: 0,
        }];
        this.changeProfileId = "change-profile";
        this.changeGameSettingsId = "change-game-settings";
        
        
        this.choice = 1;
        this.active = 1;
        this.render();
    }

    getPlayersInfo() {
        return `
            <div class="col-6">
                <form>
                    <div class="mb-5">
                        <label class="form-label" for="first-name">first name</label>
                        <input type="text" class="form-control" id="first-name"/>
                    </div>
                    <div class="mb-5">
                        <label class="form-label" for="last-name">last name</label>
                        <input type="text" class="form-control" id="last-name"/>
                    </div>
                    <div class="mb-5">
                        <label class="form-label" for="username">username</label>
                        <input type="text" class="form-control" id="username"/>
                    </div>
                    
                    <button class="btn btn-primary text-white">change</button>
                </form>
            </div>
        `
    }

    getGameSettings() {
        return `
            <div class="col-6">
                <p class="">mouse speed</p>
                <input type="range" min="0" max="10" class="mb-5 form-range w-25" id="mouse-speed"/>


                <p class="">l colour dyal racketa</p>
                <div class="d-flex justify-content-between w-25 mb-5">
                    ${this.racketColoursId.map((racketColorId)=> {
                        return `<div class="rounded-circle ${racketColorId.selected ? "border border-white" : ""}" style="${racketColorId.style}" id=${racketColorId.id}></div>`
                    }).join('')}
                </div>

                <p class="">l colour dyal l ball</p>
                <div class="d-flex justify-content-between w-25">
                    ${this.ballColorsId.map((ballColorId)=> {
                        return `<div class="rounded-circle ${ballColorId.selected ? "border border-white" : ""}" style="${ballColorId.style}" id=${ballColorId.id}></div>`
                    }).join('')}
                </div>
            </div>
        `
    }

    render() {
        this.html = `<div class="row mt-5 ">
            <div class="col-md-4 mb-5">
                <ul class="list-group mt-4" style="cursor: pointer">
                    <li class="list-group-item ${this.active ? "active" : ""}" id="change-profile">Change Profile</li>
                    <li class="list-group-item ${!this.active ? "active" : ""}" id="change-game-settings">Change Game Settings</li>
                </ul>
            </div>
            ${this.choice == 1 ? this.getPlayersInfo() : this.getGameSettings()}
        </div>`;

        document.querySelector("#app").innerHTML = this.html;
        const changeProfileBtn = document.getElementById("change-profile");
        const changeGameSettings = document.getElementById("change-game-settings");
        changeProfileBtn.addEventListener("click", ()=> {
            this.choice = this.active = 1;
            this.render();
        });
        changeGameSettings.addEventListener("click", ()=> {
            console.log("hi");
            this.choice = this.active = 0;
            this.render();
        });


        this.racketColoursId.map((racketColour) => {
            const racketColourEl = document.getElementById(racketColour.id);
            if (racketColourEl) {
                racketColourEl.addEventListener(("click"), (e) => {
                    this.racketColoursId.forEach(o => {
                        o.selected = 0;
                    })
                    racketColour.selected = 1;
                    this.render();
                })
            }
        })
        this.ballColorsId.map((ballColour) => {
            const ballColourEl = document.getElementById(ballColour.id);
            if (ballColourEl) {
                ballColourEl.addEventListener(("click"), (e) => {
                    this.ballColorsId.forEach(o => {
                        o.selected = 0;
                    })
                    ballColour.selected = 1;
                    this.render();
                })
            }
        })
    }












//this method doesn't render all the dom but instead it updates by inserting elements
//     render() {
//         this.html = `<div class="row mt-5 ">
//             <div class="col-md-4 mb-5">
//                 <ul class="list-group mt-4" style="cursor: pointer">
//                     <li class="list-group-item active" id="change-profile">Change Profile</li>
//                     <li class="list-group-item" id="change-game-settings">Change Game Settings</li>
//                 </ul>
//                 </div>
//                 <div id="replace" class="col-md-8"></div>
//         </div>`;
//         document.querySelector("#app").innerHTML = this.html;

//         const changeProfileBtn = document.getElementById("change-profile");
//         const changeGameSettings = document.getElementById("change-game-settings");
//         const replace = document.getElementById("replace");

//         replace.innerHTML = this.getPlayersInfo();
        
//         //add event listen for left list (change profile and game settings)
//         changeProfileBtn.addEventListener("click", ()=> {
//             replace.innerHTML = this.getPlayersInfo();
//             changeProfileBtn.classList.add("active");
//             changeGameSettings.classList.remove("active");
            
//         });

//         changeGameSettings.addEventListener("click", ()=> {
//             replace.innerHTML = this.getGameSettings();
//             changeGameSettings.classList.add("active");
//             changeProfileBtn.classList.remove("active");


//             // add event listener to rackets and balls colors
//             this.racketColoursId.map((racketColor) => {
//                 document.getElementById(racketColor.id).addEventListener(("click"), (e) => {
//                     this.racketColoursId.forEach(o => {
//                         document.getElementById(o.id).classList.remove("border");
//                         document.getElementById(o.id).classList.remove("border-white");
//                     })
//                     e.target.classList.add("border");
//                     e.target.classList.add("border-white");
//                 })
//             })
//             this.ballColorsId.map((ballColor) => {
//                 document.getElementById(ballColor.id).addEventListener(("click"), (e) => {
//                     this.ballColorsId.forEach(o => {
//                         document.getElementById(o.id).classList.remove("border");
//                         document.getElementById(o.id).classList.remove("border-white");
//                     })
//                     e.target.classList.add("border");
//                     e.target.classList.add("border-white");
//                 })
//             })
//         });
//     }
}