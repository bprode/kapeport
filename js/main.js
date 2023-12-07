var currentYear = new Date().getFullYear();

var button = document.getElementById("hoverButton");

function showAlert(){
alert("Thank you for visiting my page!")};

function updateCounterDisplay() {
document.getElementById("counterDisplay").textContent = "Count: " + count;
document.getElementById("counterDisplay").style.color = count % 2 === 0 ?"red" : "blue";
}
var count = 0;
function incrementCounter() {
count++;
updateCounterDisplay();
}
function resetCounter() {
count = 0;
updateCounterDisplay();
}
