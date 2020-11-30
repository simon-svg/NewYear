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
const starBefore = document.querySelector(".tree__starB");
const starAfter = document.querySelector(".tree__starA");

const app = document.querySelectorAll(".appBg");
const changeBg = document.querySelector(".click-me__bg");
let bgCount = 1;
changeBg.addEventListener("click", () => {
    app.forEach((index, i) => {
        index.style.opacity = "0";
    })
    app[bgCount].style.opacity = "1";
    bgCount++;
    if (bgCount === 3) {
        bgCount = 0;
    }
})

play.addEventListener("click", () => {
    if (playBool) {
        audio.play();

        leftHand.style.animation = "handmove ease 2s infinite";

        star.style.animation = "starAnimation linear 1s infinite";
        starBefore.style.animation = "starBeforeAnimation linear 1s infinite";
        starAfter.style.animation = "starAfterAnimation linear 1s infinite";

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
        location.reload();
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
let greenIndex = 20;
let blueIndex = 40;
let yellowIndex = 60;

redLights.forEach((item, i) => {
    item.setAttribute("x", `${redIndex}`);
    greenLights[i].setAttribute("x", `${greenIndex}`);
    blueLights[i].setAttribute("x", `${blueIndex}`);
    yellowLights[i].setAttribute("x", `${yellowIndex}`);

    redIndex += 77;
    greenIndex += 77;
    blueIndex += 77;
    yellowIndex += 77;
})





// click me present
const clickMePresent = document.querySelector(".click-me__present");
const clickMeInside = document.querySelector(".click-me__inside");
const snowMan = document.querySelector(".snow-man");
const vedro = document.querySelector(".vedro");
const sharf = document.querySelector(".sharf");
const wand = document.querySelector(".wand");
const present3 = document.querySelector(".tree__present3");
const blueShard = document.querySelector(".tree__present3_blue-shard");
const redShard = document.querySelector(".tree__present3_red-shard");
const dog = document.querySelector(".dog");

clickMePresent.addEventListener("click", () => {
    clickMeInside.style.top = "-215px";
    setTimeout(() => {
        snowMan.style.transform = "translate(-350px, -15px)";
        vedro.style.transform = "translateX(-350px) rotate(180deg)";
        sharf.style.transform = "translateX(-350px)";
        wand.style.transform = "translateX(-350px)";
        setTimeout(() => {
            present3.style.transform = "translateX(-350px)";
            setTimeout(() => {
                present3.style.animation = "present3Animation ease 2s";
                setTimeout(() => {
                    present3.style.animation = "scaleAnimation linear 2s";
                    setTimeout(() => {
                        present3.style.display = "none";
                        blueShard.style.display = "block";
                        redShard.style.display = "block";
                        dog.style.display = "block";
                        setTimeout(() => {
                            blueShard.style.transform = "translate(-920px, -666px) rotate(540deg)";
                            redShard.style.transform = "translate(-60px, -460px) rotate(600deg)";
                        })
                    }, 2000)
                }, 2000)
            }, 1000)
        }, 1000)
    }, 1000)
})





// click me congratulation
const Congratulation = document.querySelector(".click-me__congratulation");
const present1 = document.querySelector(".tree__present1");
const present1Inside = document.querySelector(".tree__present1_inside");
const present1Later1 = document.querySelectorAll(".tree__present1_later")[0];
const present1Later2 = document.querySelectorAll(".tree__present1_later")[1];
const present1Later3 = document.querySelectorAll(".tree__present1_later")[2];
const present1Later4 = document.querySelectorAll(".tree__present1_later")[3];
const present1Later5 = document.querySelectorAll(".tree__present1_later")[4];
const present1Later6 = document.querySelectorAll(".tree__present1_later")[5];
const present1Later7 = document.querySelectorAll(".tree__present1_later")[6];
const present1Later8 = document.querySelectorAll(".tree__present1_later")[7];
const present1Later9 = document.querySelectorAll(".tree__present1_later")[8];
const present1Later10 = document.querySelectorAll(".tree__present1_later")[9];
const present1Later11 = document.querySelectorAll(".tree__present1_later")[10];
const present1Later12 = document.querySelectorAll(".tree__present1_later")[11];

let laterRotate = -60;

Congratulation.addEventListener("click", () => {
    clickMeInside.style.top = "-215px";
    setTimeout(() => {
        snowMan.style.transform = "translate(-350px, -15px)";
        vedro.style.transform = "translateX(-350px) rotate(180deg)";
        sharf.style.transform = "translateX(-350px)";
        wand.style.transform = "translateX(-350px)";
        setTimeout(() => {
            present1.style.transform = "translateX(-430px)";
            setTimeout(() => {
                present1.style.animation = "present1Animation ease 2s";
                setTimeout(() => {
                    present1.style.animation = "present1ScaleAnimation linear 2s";
                    setTimeout(() => {
                        present1.style.display = "none";
                        present1Inside.style.display = "flex";
                        setTimeout(() => {
                            present1Inside.style.transform = "translate(-720px, -700px) scale(1)";
                            setTimeout(() => {
                                present1Later1.style.transform = "translate(13px, 116px) rotate(-60deg)";
                                present1Later2.style.transform = "translateY(73px) rotate(-50deg)";
                                present1Later3.style.transform = "translateY(46px) rotate(-40deg)";
                                present1Later4.style.transform = "translateY(30px) rotate(-30deg)";
                                present1Later5.style.transform = "translateY(16px) rotate(-20deg)";
                                present1Later6.style.transform = "translateY(0px) rotate(-10deg)";
                                present1Later7.style.transform = "translateY(0px) rotate(10deg)";
                                present1Later8.style.transform = "translateY(10px) rotate(20deg)";
                                present1Later9.style.transform = "translateY(40px) rotate(30deg)";
                                present1Later10.style.transform = "translateY(60px) rotate(40deg)";
                                present1Later11.style.transform = "translateY(89px) rotate(50deg)";
                                present1Later12.style.transform = "translate(-12px, 122px) rotate(60deg)";
                                setTimeout(() => {
                                    document.querySelector(".tree__present1_button").style = "opacity: 1; visibility: visible;"
                                }, 1000)
                            }, 2000)
                        }, 50)
                    }, 2000)
                }, 2000)
            }, 1000)
        }, 1000)
    }, 1000)
})



// tree present1 button click me
const present1Button = document.querySelector(".tree__present1_button");
let present1ButtonBool = true;

present1Button.addEventListener("click", () => {
    if (present1ButtonBool) {
        present1Later1.style.transform = "translate(-100px, 40px) rotate(-700deg)";
        present1Later2.style.transform = "translate(-169px, 295px) rotate(60deg)";
        present1Later3.style.transform = "translate(100px, 91px) rotate(-80deg)";
        present1Later4.style.transform = "translate(572px, 100px) rotate(-390deg)";
        present1Later5.style.transform = "translate(210px, -152px) rotate(180deg)";
        present1Later6.style.transform = "translate(90px, 100px) rotate(60deg)";
        present1Later7.style.transform = "translate(-780px, -43px) rotate(470deg)";
        present1Later8.style.transform = "translate(286px, 550px) rotate(510deg)";
        present1Later9.style.transform = "translate(383px, 62px) rotate(540deg)";
        present1Later10.style.transform = "translate(270px, 310px) rotate(730deg)";
        present1Later11.style.transform = "translate(-590px, -108px) rotate(606deg)";
        present1Later12.style.transform = "translate(-790px, 66px) rotate(590deg)";
    }
    else {
        present1Later1.style.transform = "translate(13px, 116px) rotate(-60deg)";
        present1Later2.style.transform = "translateY(73px) rotate(-50deg)";
        present1Later3.style.transform = "translateY(46px) rotate(-40deg)";
        present1Later4.style.transform = "translateY(30px) rotate(-30deg)";
        present1Later5.style.transform = "translateY(16px) rotate(-20deg)";
        present1Later6.style.transform = "translateY(0px) rotate(-10deg)";
        present1Later7.style.transform = "translateY(0px) rotate(10deg)";
        present1Later8.style.transform = "translateY(10px) rotate(20deg)";
        present1Later9.style.transform = "translateY(40px) rotate(30deg)";
        present1Later10.style.transform = "translateY(60px) rotate(40deg)";
        present1Later11.style.transform = "translateY(89px) rotate(50deg)";
        present1Later12.style.transform = "translate(-12px, 122px) rotate(60deg)";  
    }
    present1ButtonBool = !present1ButtonBool;
})