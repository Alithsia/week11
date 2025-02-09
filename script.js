//Находим элементы
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list-tasks");

//Функция,
function createTask() {
  const newElement = document.createElement("li");
  newElement.setAttribute("class", "list__item");
  newElement.innerHTML = input.value;
  list.append(newElement);
  input.value = " ";
}

function checkTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

button.addEventListener("click", createTask);

list.addEventListener("click", checkTask);
