console.log("it works");

// ! get ElementById()
// Search the document and once it finds a match on the HTML page you are now "hooked" to that element to alter it.

let header = document.getElementById("main-header");
console.log(header);
// ? Changing Color of the Header to Red

header.style.color = "red";
// ! How do I change the text that is displayed
header.textContent = "Rob's Todo List";

let catagory = document.getElementById("catagory");
// ! If you want to have HTML Tags to get rendered as HTML then you will have to use innerHTML
catagory.innerHTML = "<em>Chores</em>";

// ! getElementByClassName()
//this Method returns a collection of elements with the specified class name
let todoItems = document.getElementsByClassName("todo-items");
console.log(todoItems[0]);
// its almsot an array so can look at the first one
console.log(todoItems[1]);
//same for the second
console.log(todoItems);
// HTML collection

for(let i = 0; i<todoItems.length; i++){
    console.log(todoItems[i].textContent.includes("Help"))
    if (todoItems[i].textContent.includes("Help")) {
        todoItems[i].style.color = "green";
    } else {
    todoItems[i].style.color = "purple";
}
}

// ! getElementsByTagName()

let pTags = document.getElementsByTagName("p");
console.log(pTags);

pTags[0].style.fontStyle = "italic";

// ! querySelector()
// give you the first element that meets the requirements

let todoItemExample = document.querySelector(".todo-items");
console.log(todoItemExample);

let ptagExample = document.querySelector("p");
console.log(ptagExample);

let headerExample = document.querySelector("#main-header");
console.log(headerExample);

// ! querySelectorAll()
// returns all the elements that match the CSS Selector

let todoItemsExample2 = document.querySelectorAll(".todo-items");

console.log(todoItemsExample2);

todoItemsExample2.forEach((item) => console.log(item.textContent));

let ptagExample2 = document.querySelectorAll("p");
console.log(ptagExample2);