var elForm = document.querySelector(".distance__form")
var elWalk = document.querySelector(".walk__converted")
var elBike = document.querySelector(".bike__converted")
var elCar = document.querySelector(".car__converted")
var elPlane = document.querySelector(".plane__converted")

// speed/60 = 0.006 and so on

var walkSpeed = 0.06;
var bikeSpeed = 0.335;
var carSpeed = 1.16;
var planeSpeed = 13.3;

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    var elInput = document.querySelector(".distance__input").value.trim();

    if (elInput > 0){

        var result1 = Math.trunc((elInput / walkSpeed) / 60)
        var result2 = ((elInput / walkSpeed) % 60).toFixed(1)
        var foot = `${result1} hour(s) ${result2} minute(s)`;
        elWalk.value = foot;

        var result1 = Math.trunc((elInput / bikeSpeed) / 60)
        var result2 = ((elInput / bikeSpeed) % 60).toFixed(1)
        var bike = `${result1} hour(s) ${result2} minute(s)`;
        elBike.value = bike;

        var result1 = Math.trunc((elInput / carSpeed) / 60)
        var result2 = ((elInput / carSpeed) % 60).toFixed(1)
        var car = `${result1} hour(s) ${result2} minute(s)`;
        elCar.value = car;

        var result1 = Math.trunc((elInput / planeSpeed) / 60)
        var result2 = ((elInput / planeSpeed) % 60).toFixed(1)
        var plane = `${result1} hour(s) ${result2} minute(s)`;
        elPlane.value = plane;
    } else {
        alert("Type a number!")
    }
})