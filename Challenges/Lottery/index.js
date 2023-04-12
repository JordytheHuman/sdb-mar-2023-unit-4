import { drawingNumbers, gamblingProblems } from "./lotto.js";

console.log("it works from index.js lotto");

let powerBallNumbers = drawingNumbers();
console.log("index.js", powerBallNumbers);

let numberToDisplay = document.querySelectorAll(".number");
console.log(numberToDisplay);

let numberOfTickets = document.querySelector("#tickets")

numberToDisplay.forEach((item, index) => {
        // Console Log Item
        item.textContent = powerBallNumbers[index];
      });
    
let ticketButton = document.getElementById("drawtickets")
console.log(ticketButton)

let allMyTickets = []

ticketButton.addEventListener("click", ticketPurchase);
console.log(ticketButton);

function ticketPurchase (event){
event.preventDefault();
let numberOfTicketsValue = numberOfTickets.value
console.log(numberOfTicketsValue);
allMyTickets = gamblingProblems(numberOfTicketsValue);
console.log(allMyTickets);
displayTickets()

}

function displayTickets (){
    allMyTickets.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    let todoList = document.getElementById("ul");
    todoList.appendChild(listItem);
});
}
