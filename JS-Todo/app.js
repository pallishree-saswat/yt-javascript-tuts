//select elements
const form = document.getElementById("task-form");
const submitBtn = document.getElementById("submit");
const input = document.getElementById("task");
const lists = document.getElementById("list");

form.addEventListener("submit", addTodo);

//add todo
function addTodo(e) {
  e.preventDefault();

  const todoText = input.value;
  const container = document.createElement("div");

  let editInput = document.createElement("input");
  editInput.classList.add("text-input");
  editInput.value = todoText;
  editInput.setAttribute("readonly", "readonly");
  container.appendChild(editInput);

  const btn1 = document.createElement("button");
  btn1.className = "remove-btn";
  btn1.innerHTML = '<i class="fa fa-trash"></i>';
  container.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.className = "edit-btn";
  btn2.innerHTML = '<i class="fa fa-edit"></i>';
  container.appendChild(btn2);

  lists.appendChild(container);

  //clear input
  input.value = "";

  //romove item
  btn1.onclick = function (e) {
    container.remove();
  };

  //edit item
  btn2.onclick = function (e) {
    if (btn2.innerHTML == '<i class="fa fa-edit"></i>') {
      editInput.classList.remove("text-input");
      editInput.classList.add("edit-input");
      btn2.innerHTML = '<i class="fa fa-check"></i>';
      editInput.removeAttribute("readonly");
      editInput.focus();
    } else if (btn2.innerHTML == '<i class="fa fa-check"></i>') {
      editInput.classList.add("text-input");
      btn2.innerHTML = '<i class="fa fa-edit"></i>';
      editInput.setAttribute("readonly", "readonly");
    }
  };
}
