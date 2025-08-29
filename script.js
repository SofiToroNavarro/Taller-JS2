
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");



function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    saveTasks(); 
}

function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll(".task-item");
    taskItems.forEach(item => {
        tasks.push(item.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
}


addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText !== "") {
        createTaskElement(taskText);
        taskInput.value = ""; 
    }
});


loadTasks();