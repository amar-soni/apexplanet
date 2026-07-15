const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const category = document.getElementById("category");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            <div class="task-info">
                <strong>${task.name}</strong>
                <span class="priority">
                    ${task.priority} | ${task.category}
                </span>
            </div>

            <div class="actions">
                <button class="complete-btn" onclick="completeTask(${index})">
                    ✓
                </button>

                <button class="delete-btn" onclick="deleteTask(${index})">
                    ✕
                </button>
            </div>
        `;

        taskList.appendChild(li);

    });

}

addTask.addEventListener("click", function () {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        name: taskInput.value,
        priority: priority.value,
        category: category.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    displayTasks();

    taskInput.value = "";

});

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

displayTasks();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields.");

        return;

    }

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;

    }

    alert("Form submitted successfully!");

    contactForm.reset();

});