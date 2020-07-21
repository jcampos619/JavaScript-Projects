document.write(typeof "Word");
document.write(2E310);
document.write(-3E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(2 + 2);
document.write("10" + 5);
document.write(10==10);
document.write(3==11);
X = 10;
Y = 10;
document.write(X === Y);
X = 10;
Z = "Magnus";
document.write (X === Z);
A = "10";
X = 10;
document.write (A === X);
document.write (A === Z);
document.write (5 > 2 && 10 > 4);
document.write (5 > 10 && 10 > 4);
document.write (5 > 10 || 10 > 4);
document.write (5 > 10 || 10 > 20);
function not_Function() {
    document.getElementById("Not").innerHTML= !(20 > 10);
}
function notFunction() {
    document.getElementById("Not").innerHTML= !(5 > 10);
}