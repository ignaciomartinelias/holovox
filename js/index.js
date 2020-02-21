// Dynamic path set for icon animation

runAnimation();

window.addEventListener("resize", runAnimation);

function createPath(pathName, index) {
    let pathBase = 'path("M initialX , initialY Q finalX , curveHeight finalX , finalY")';
    let pathBaseTop = 'path("M initialX , initialY Q initialX, middleHeight middleWidth , middleHeight T finalX , finalY")';
    let newPathString = "";

    const finalX = Math.round((window.innerWidth / 2));
    const finalY = Math.round(window.innerHeight / 100 * 65);
    let initialY = Math.random() * window.innerHeight / 100 * 50;
    let initialX = Math.random() * window.innerWidth;
    let curveHeightTop = (finalY + initialY) / 3;
    let curveHeightBottom = Math.round(window.innerHeight / 100 * 20);

    function recalculateInitialY() {
        if (index === 0 || index === 1 || index === 4 || index === 5 || index === 8 || index === 9) {
            if (initialY > (window.innerHeight * .2)) {
                initialY = Math.random() * window.innerHeight / 100 * 50;
                recalculateInitialY();
            }
        } else {
            if (initialY < (window.innerHeight * .4)) {
                initialY = Math.random() * window.innerHeight / 100 * 50;
                recalculateInitialY();
            }
        }
    }

    function recalculateInitialX() {
        if (initialY < (window.innerHeight * .2)) {
            if (index % 2 === 0) {
                if (initialX > (window.innerWidth * .25)) {
                    initialX = Math.random() * window.innerWidth;
                    recalculateInitialX();
                }
            } else {
                if (initialX < (window.innerWidth * .75)) {
                    initialX = Math.random() * window.innerWidth;
                    recalculateInitialX();
                }
            }
        } else {
            if (index % 2 === 0) {
                if (initialX < (window.innerWidth * .2) || initialX > (window.innerWidth * .35)) {
                    initialX = Math.random() * window.innerWidth;
                    recalculateInitialX();
                }
            } else {
                if (initialX < (window.innerWidth * .65) || initialX > (window.innerWidth * .8)) {
                    initialX = Math.random() * window.innerWidth;
                    recalculateInitialX();
                }
            }
        }
    }

    recalculateInitialY();
    recalculateInitialX();

    const curveWidth = (initialX + finalX) / 2;

    if (initialY < (window.innerHeight * .2)) {
        newPathString = pathBaseTop.replace("finalX", finalX)
            .replace("finalX", finalX)
            .replace("finalY", finalY)
            .replace("initialX", initialX)
            .replace("initialX", initialX)
            .replace("middleWidth", curveWidth)
            .replace("initialY", initialY)
            .replace("middleHeight", curveHeightTop)
            .replace("middleHeight", curveHeightTop);
    } else {
        newPathString = pathBase.replace("finalX", finalX)
            .replace("finalX", finalX)
            .replace("finalY", finalY)
            .replace("initialX", initialX)
            .replace("initialY", initialY)
            .replace("curveHeight", curveHeightBottom);
    }

    const pathTrailName = pathName.replace("--", "");
    const pathTrailValue = newPathString.replace('path("', "").replace('")', "");
    const pathTrailLengthName = "--pathLength" + pathName.replace("--path", "");
    const pathTrail = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathTrail.setAttribute('d', pathTrailValue);
    pathTrail.setAttribute('id', pathTrailName);
    const pathTrailLengthValue = pathTrail.getTotalLength();

    document.documentElement.style.setProperty(pathName, newPathString);
    document.documentElement.style.setProperty(pathTrailLengthName, pathTrailLengthValue);

    document.getElementsByTagName("svg")[0].appendChild(pathTrail);


}

function runAnimation() {
    document.getElementsByTagName("svg")[0].innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const pathName = `--path${i + 1}`;
        createPath(pathName, i);
    }
}

// Building construction animation

setTimeout(function () {
    document.getElementById("building-base").style.display = "none";
    document.getElementById("building-1").style.display = "block";
}, 2000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "60px";
    document.getElementById("escombro-2").style.bottom = "50px";
    document.getElementById("escombro-3").style.bottom = "60px";
    document.getElementById("escombro-4").style.bottom = "50px";
    document.getElementById("building-1").style.display = "none";
    document.getElementById("building-2").style.display = "block";
}, 3000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "80px";
    document.getElementById("escombro-2").style.bottom = "70px";
    document.getElementById("escombro-3").style.bottom = "80px";
    document.getElementById("escombro-4").style.bottom = "70px";
    document.getElementById("building-2").style.display = "none";
    document.getElementById("building-3").style.display = "block";
}, 4000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "100px";
    document.getElementById("escombro-2").style.bottom = "90px";
    document.getElementById("escombro-3").style.bottom = "100px";
    document.getElementById("escombro-4").style.bottom = "90px";
    document.getElementById("building-3").style.display = "none";
    document.getElementById("building-4").style.display = "block";
}, 5000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "120px";
    document.getElementById("escombro-2").style.bottom = "110px";
    document.getElementById("escombro-3").style.bottom = "120px";
    document.getElementById("escombro-4").style.bottom = "110px";
    document.getElementById("building-4").style.display = "none";
    document.getElementById("building").style.display = "block";
}, 6000)

setTimeout(function () {
    document.getElementById("escombro-1").style.display = "none";
    document.getElementById("escombro-2").style.display = "none";
    document.getElementById("escombro-3").style.display = "none";
    document.getElementById("escombro-4").style.display = "none";
}, 7000)


