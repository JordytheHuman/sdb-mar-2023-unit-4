console.log("it works from hello-friends");

let nameForm = document.querySelector("#name-form");

let userInput = document.querySelector("#user-input");
console.log(userInput);

let computerResponse = document.querySelector("#computer-response");
console.log(computerResponse);

let enemies = []
enemies = ["orc", "goblin", "dragon", "troll"];

nameForm.addEventListener("submit", formSubmit)

function formSubmit (event){
    event.preventDefault();
    let userInputValue = userInput.value;
    console.log(userInputValue);
    if (enemies.includes(userInputValue)) {
        computerResponse.textContent = "Go away!"
        console.log(userInputValue);
    } else {
        computerResponse.textContent = `Hello ${userInputValue}`
        console.log(userInputValue);
    }

}





