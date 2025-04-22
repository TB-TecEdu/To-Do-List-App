// Get elements from the DOM
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add event listener to the 'Add Task' button
addButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    // Create task text and delete button
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    
    // Add click event to toggle completion of task
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add new task to the task list
    taskList.appendChild(li);
    
    // Clear the input field after adding the task
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement; // Get the parent list item (li)
    li.remove(); // Remove the task from the list
}
// Add event listener to the 'Add Task' button
addButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task-item');
    
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    
    // Add click event to toggle completion of task
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = "";  // Clear the input field after adding the task
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement; // Get the parent list item (li)
    li.remove(); // Remove the task from the list
}
