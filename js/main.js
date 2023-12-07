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
function populateOrderedList(initialValue, stopValue) {
    var numbersList = document.getElementById("numbers");
    for (let i = initialValue; i <= stopValue; i = i + 1) {
        var listItem = document.createElement("li");
        listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
        numbersList.appendChild(listItem);
    }
}
populateOrderedList(1, 100);
