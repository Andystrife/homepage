//Load Tasks
window.onload = loadTasks;

document.getElementById("todo").addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

//Retrieve Tasks from Local Storage and Populate Task List
function loadTasks() {
  if (localStorage.getItem("tasks") == null) return;
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  tasks.forEach((task) => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
    }>
        <input type="text" value="${task.task}" class="task ${
      task.completed ? "completed" : ""
    }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <i class="fa-solid fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}

//Add New Tasks to Task List and Store in Local Storage
function addTask() {
  const task = document.getElementById("todo_input");
  const list = document.getElementById("todo_list");

  if (task.value === "") {
    alert("Please Enter A Task");
    return false;
  }

  if (document.querySelector(`input[value="${task.value}"]`)) {
    alert("Task already exist!");
    return false;
  }

  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      { task: task.value, completed: false },
    ])
  );

  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
      <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
      <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
  task.value = "";
}

let currentTask = null;

function getCurrentTask(event) {
  currentTask = event.value;
}

function editTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  if (event.value === "") {
    alert("Task is Empty");
    event.value = currentTask;
    return;
  }

  tasks.forEach((task) => {
    if (task.task === event.value) {
      alert("Task Already Exists");
      event.value = currentTask;
      return;
    }
  });

  tasks.forEach((task) => {
    task.task = event.value;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task) => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task) => {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}
