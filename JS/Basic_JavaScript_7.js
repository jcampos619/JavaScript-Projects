var X=10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    X= 5;
    document.write(X + 10 + "<br>");
}
function Add_numbers_4() {
    X= 2;
    document.write(X + 1);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 21) {
        document.getElementById("Greeting").innerHTML= "How are you today?";
    }
}
function Age_Function() {
    Age = document.getElementById("Age").nodeValue;
    if (Age <= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}