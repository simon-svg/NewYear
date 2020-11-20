const play = document.querySelector(".click-me");
let playBool = true;
const song = document.querySelector(".song");
const leftHand = document.querySelector(".snow-man__left-hand");
const redLights = document.querySelectorAll(".red");
const greenLights = document.querySelectorAll(".green");
const blueLights = document.querySelectorAll(".blue");
const yellowLights = document.querySelectorAll(".yellow");

const branchRed = document.querySelectorAll(".branch-red");
const branchGreen = document.querySelectorAll(".branch-green");
const branchBlue = document.querySelectorAll(".branch-blue");
const branchYellow = document.querySelectorAll(".branch-yellow");

const audio = document.querySelector(".audio");
const star = document.querySelector(".tree__star");
const starBefore = document.querySelector(".tree__starB")
const starAfter = document.querySelector(".tree__starA")

const app = document.querySelectorAll(".appBg");
const changeBg = document.querySelector(".click-me__bg");
let bgCount = 1;
changeBg.addEventListener("click", () => {
    app.forEach((index, i) => {
        index.style.opacity = "0";
    })
    app[bgCount].style.opacity = "1";
    bgCount++;
    if(bgCount === 3){
        bgCount = 0;
    }
})

play.addEventListener("click", () => {
    if (playBool) {
        audio.play();

        leftHand.style.animation = "handmove ease 2s infinite";

        star.style.animation = "starAnimation ease 1s infinite";
        starBefore.style.animation = "starBeforeAnimation ease 1s infinite";
        starAfter.style.animation = "starAfterAnimation ease 1s infinite";

        redLights.forEach((item, i) => {
            item.style.animation = "circleAnimRed ease .5s infinite";
            blueLights[i].style.animation = "circleAnimBlue ease .5s infinite";

            setTimeout(() => {
                greenLights[i].style.animation = "circleAnimGreen ease .5s infinite";
                yellowLights[i].style.animation = "circleAnimYellow ease .5s infinite";
            }, 250)
        })

        branchRed.forEach((item, i) => {
            item.style.animation = "circleAnimRed ease .5s infinite";
            branchBlue[i].style.animation = "circleAnimBlue ease .5s infinite";

            setTimeout(() => {
                branchGreen[i].style.animation = "circleAnimGreen ease .5s infinite";
                branchYellow[i].style.animation = "circleAnimYellow ease .5s infinite";
            }, 250)
        })
    }
    else {
        location.reload()
    }
    playBool = !playBool;
})






// svg
const pathLights = document.querySelector(".path__lights");
const pathLights2 = document.querySelector(".path__lights2");
const vv100 = window.innerWidth;
const vv50 = window.innerWidth / 2;
const vv25 = window.innerWidth / 4;
const vv75 = window.innerWidth / 2 + vv25;
pathLights.setAttribute("d", `M0 0 Q ${vv25} 200 ${vv50} 0`);
pathLights2.setAttribute("d", `M${vv50} 0 Q ${vv75} 200 ${vv100} 0`);






// lights
let redIndex = 1;
let greenIndex = 2;
let blueIndex = 3;
let yellowIndex = 4;


redLights.forEach((item, i) => {
    item.setAttribute("x", `${redIndex}vw`);
    greenLights[i].setAttribute("x", `${greenIndex}vw`);
    blueLights[i].setAttribute("x", `${blueIndex}vw`)
    yellowLights[i].setAttribute("x", `${yellowIndex}vw`)

    redIndex += 4
    greenIndex += 4
    blueIndex += 4
    yellowIndex += 4
})