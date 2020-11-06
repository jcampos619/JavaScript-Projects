/* This function counts to 10 */
function Call_Loop() {
    var Digit= "";
    var X= 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML= Digit;
}

/* This lists ALL of the instruments */
var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

function array_Function() {
    var Cat_Picture= []
    Cat_Picture[0]= "sleeping";
    Cat_Picture[1]= "playing";
    Cat_Picture[2]= "eating";
    Cat_Picture[3]= "purring";
    document.getElementById("Array").innerHTML= "In this picture, the car is " + Cat_Picture[3] + ".";
}

function constant_function() {
    const Musical_Instrument= {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color= "blue";
    Musical_Instrument.price= "$900";
    document.getElementById("Constant").innerHTML="The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;

}

/* This whole thing below is to show the different function of 'let' and 'var' */
var X= 82;
document.write(X);
{
    let X= 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Mazda ",
    model: "Miata ",
    year: "1992 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.description();
