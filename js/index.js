setTimeout(function () {
    console.log(document.getElementById("escombro-1").style.bottom);    
    document.getElementById("building-base").style.display = "none";
    document.getElementById("building-1").style.display = "block";
    document.getElementsByClassName("bottom-section")[0].style.backgroundPositionY = "120px";
}, 2000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "60px";
    document.getElementById("escombro-2").style.bottom = "50px";
    document.getElementById("escombro-3").style.bottom = "60px";
    document.getElementById("escombro-4").style.bottom = "50px";
    document.getElementById("building-1").style.display = "none";
    document.getElementById("building-2").style.display = "block";
    document.getElementsByClassName("bottom-section")[0].style.backgroundPositionY = "90px";
}, 3000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "80px";
    document.getElementById("escombro-2").style.bottom = "70px";
    document.getElementById("escombro-3").style.bottom = "80px";
    document.getElementById("escombro-4").style.bottom = "70px";
    document.getElementById("building-2").style.display = "none";
    document.getElementById("building-3").style.display = "block";
    document.getElementsByClassName("bottom-section")[0].style.backgroundPositionY = "60px";
}, 4000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "100px";
    document.getElementById("escombro-2").style.bottom = "90px";
    document.getElementById("escombro-3").style.bottom = "100px";
    document.getElementById("escombro-4").style.bottom = "90px";
    document.getElementById("building-3").style.display = "none";
    document.getElementById("building-4").style.display = "block";
    document.getElementsByClassName("bottom-section")[0].style.backgroundPositionY = "30px";
}, 5000)

setTimeout(function () {
    document.getElementById("escombro-1").style.bottom = "120px";
    document.getElementById("escombro-2").style.bottom = "110px";
    document.getElementById("escombro-3").style.bottom = "120px";
    document.getElementById("escombro-4").style.bottom = "110px";
    document.getElementById("building-4").style.display = "none";
    document.getElementById("building").style.display = "block";
    document.getElementsByClassName("bottom-section")[0].style.backgroundPositionY = "0px";
}, 6000)

setTimeout(function () {
    document.getElementById("escombro-1").style.display = "none";
    document.getElementById("escombro-2").style.display = "none";
    document.getElementById("escombro-3").style.display = "none";
    document.getElementById("escombro-4").style.display = "none";
}, 7000)