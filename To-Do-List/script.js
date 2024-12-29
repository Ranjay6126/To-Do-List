// Get the input box element from the HTML
const inputBox = document.getElementById("input-box");

// Get the list container element where tasks will be displayed
const listcontainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        // Show an alert if no task is entered
        alert('Please enter a task');
    } else {
        // Create a new list item (li) for the task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the text of the task

        // Append the new task to the list container
        listcontainer.appendChild(li);

        // Create a delete button (span) for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for delete (×)
        li.appendChild(span); // Add the delete button to the task
    }

    // Clear the input box after adding the task
    inputBox.value = "";

    // Save the updated tasks to localStorage
    saveData();
}

// Event listener to handle clicks on the list container
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // If the clicked element is a list item, toggle the "checked" class
        e.target.classList.toggle("checked");
        // Save the updated tasks to localStorage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // If the clicked element is a delete button (span), remove its parent task
        e.target.parentElement.remove();
        // Save the updated tasks to localStorage
        saveData();
    }
}, false);

// Function to save tasks to localStorage
function saveData() {
    // Save the innerHTML of the list container to localStorage under the key "data"
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Function to load tasks from localStorage and display them
function showTask() {
    // Retrieve the tasks from localStorage and set them as the innerHTML of the list container
    listcontainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display saved tasks when the page loads
showTask();
