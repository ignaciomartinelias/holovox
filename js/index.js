// Dynamic path set for icon animation

runAnimation();

window.addEventListener("resize", runAnimation);

function createPath(pathName, index) {
    var pathBase = 'path("M initialX , initialY Q finalX , curveHeight finalX , finalY")';
    // var pathBaseTop = 'path("M initialX , initialY Q initialX, middleHeight middleWidth , middleHeight T finalX , finalY")';
    var newPathString = "";

    var finalX = Math.round((window.innerWidth / 2));
    var finalY = Math.round(window.innerHeight / 100 * 65);
    var initialY = Math.random() * window.innerHeight / 100 * 45;
    var initialX = Math.random() * window.innerWidth;
    var curveHeightTop = -150;
    var curveHeightBottom = 150;

    function recalculateInitialY() {
        if (index === 0 || index === 1 || index === 4 || index === 5 || index === 8 || index === 9) {
            if (initialY > (window.innerHeight * .2)) {
                initialY = Math.random() * window.innerHeight / 100 * 45;
                recalculateInitialY();
            }
        } else {
            if (initialY < (window.innerHeight * .35)) {
                initialY = Math.random() * window.innerHeight / 100 * 45;
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
                if (initialX < (window.innerWidth * .2) || initialX > (window.innerWidth * .40)) {
                    initialX = Math.random() * window.innerWidth;
                    recalculateInitialX();
                }
            } else {
                if (initialX < (window.innerWidth * .60) || initialX > (window.innerWidth * .8)) {
                    initialX = Math.random() * window.innerWidth;
                    recalculateInitialX();
                }
            }
        }
    }

    recalculateInitialY();
    recalculateInitialX();

    // var curveWidth = (initialX + finalX) / 2;

    if (initialY < (window.innerHeight * .2)) {
        newPathString = pathBase.replace("finalX", finalX)
        .replace("finalX", finalX)
        .replace("finalY", finalY)
        .replace("initialX", initialX)
        .replace("initialY", initialY)
        .replace("curveHeight", curveHeightTop);
    } else {
        newPathString = pathBase.replace("finalX", finalX)
            .replace("finalX", finalX)
            .replace("finalY", finalY)
            .replace("initialX", initialX)
            .replace("initialY", initialY)
            .replace("curveHeight", curveHeightBottom);
    }

    var pathTrailName = pathName.replace("--", "");
    var pathTrailValue = newPathString.replace('path("', "").replace('")', "");

    var pathTrail = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathTrail.setAttribute('d', pathTrailValue);
    pathTrail.setAttribute('id', pathTrailName);

    var pathTrailLengthName = "--pathLength" + pathName.replace("--path", "");
    var pathTrailLengthValue = pathTrail.getTotalLength();

    document.documentElement.style.setProperty(pathTrailLengthName, pathTrailLengthValue);
    document.documentElement.style.setProperty(pathName, newPathString);
    document.getElementsByTagName("svg")[0].appendChild(pathTrail);
}

function runAnimation() {
    document.getElementsByTagName("svg")[0].innerHTML = '';
    for (var i = 0; i < 10; i++) {
        var pathName = `--path${i + 1}`;
        createPath(pathName, i);
    }
}

// Building construction animation

document.documentElement.style.setProperty("--escombroTop", "45px");
document.documentElement.style.setProperty("--escombroBottom", "25px");

setTimeout(function () {
    document.getElementById("building-base").style.display = "none";
    document.getElementById("building-1").style.display = "block";
    document.getElementById("skyline-base").style.display = "none";
    document.getElementById("skyline-1").style.display = "block";
}, 2500)

setTimeout(function () {
    document.documentElement.style.setProperty("--escombroTop", "65px");
document.documentElement.style.setProperty("--escombroBottom", "45px");
    document.getElementById("escombro-1").style.bottom = "60px";
    document.getElementById("escombro-2").style.bottom = "50px";
    document.getElementById("escombro-3").style.bottom = "60px";
    document.getElementById("escombro-4").style.bottom = "50px";
    document.getElementById("building-1").style.display = "none";
    document.getElementById("building-2").style.display = "block";
    document.getElementById("skyline-1").style.display = "none";
    document.getElementById("skyline-2").style.display = "block";
}, 3750)

setTimeout(function () {
    document.documentElement.style.setProperty("--escombroTop", "85px");
document.documentElement.style.setProperty("--escombroBottom", "65px");
    document.getElementById("escombro-1").style.bottom = "80px";
    document.getElementById("escombro-2").style.bottom = "70px";
    document.getElementById("escombro-3").style.bottom = "80px";
    document.getElementById("escombro-4").style.bottom = "70px";
    document.getElementById("building-2").style.display = "none";
    document.getElementById("building-3").style.display = "block";
    document.getElementById("skyline-2").style.display = "none";
    document.getElementById("skyline-3").style.display = "block";
}, 5000)

setTimeout(function () {
    document.documentElement.style.setProperty("--escombroTop", "105px");
document.documentElement.style.setProperty("--escombroBottom", "85px");
    document.getElementById("escombro-1").style.bottom = "100px";
    document.getElementById("escombro-2").style.bottom = "90px";
    document.getElementById("escombro-3").style.bottom = "100px";
    document.getElementById("escombro-4").style.bottom = "90px";
    document.getElementById("building-3").style.display = "none";
    document.getElementById("building-4").style.display = "block";
    document.getElementById("skyline-3").style.display = "none";
    document.getElementById("skyline-4").style.display = "block";
}, 6250)

setTimeout(function () {
    document.documentElement.style.setProperty("--escombroTop", "125px");
document.documentElement.style.setProperty("--escombroBottom", "105px");
    document.getElementById("escombro-1").style.bottom = "120px";
    document.getElementById("escombro-2").style.bottom = "110px";
    document.getElementById("escombro-3").style.bottom = "120px";
    document.getElementById("escombro-4").style.bottom = "110px";
    document.getElementById("building-4").style.display = "none";
    document.getElementById("building-final").style.display = "block";
    document.getElementById("skyline-4").style.display = "none";
    document.getElementById("skyline-final").style.display = "block";
}, 7500)

setTimeout(function () {
    document.getElementById("escombro-1").style.display = "none";
    document.getElementById("escombro-2").style.display = "none";
    document.getElementById("escombro-3").style.display = "none";
    document.getElementById("escombro-4").style.display = "none";
}, 8750)