function My_First_Function() { //Defining a function and naming it.
    var str= 'This text is red!';
    var result= str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML=result;
}
function myFunction() {
    var sentence="I am learning ";
    sentence +="a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}