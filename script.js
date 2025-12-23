const inputbox = document.getElementById("taskInput");
const listitems = document.getElementById("taskList");

function addTask() {
  if (inputbox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = inputbox.value;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete";

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    listitems.appendChild(li);
  }

  inputbox.value = "";
  savingdata();
}

listitems.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
  }
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    savingdata();
  }

  if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement;
    let span = li.querySelector("span");

    let newTask = prompt("Edit task:", span.innerText);

    if (newTask !== null && newTask.trim() !== "") {
      span.innerText = newTask;
      savingdata();
    }
  }
});

function savingdata() {
  localStorage.setItem("data", listitems.innerHTML);
}

function showingdata() {
  listitems.innerHTML = localStorage.getItem("data") || "";
}

showingdata();
function clearAll() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    listitems.innerHTML = "";
    localStorage.removeItem("data");
  }
}