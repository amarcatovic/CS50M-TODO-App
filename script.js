const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  const todo = prompt("New TODO! What do you have to do?");
  let li = document.createElement("li");
  li.classList.add(classNames.TODO_ITEM);

  let input = document.createElement("input");
  input.type = "checkbox";
  input.addEventListener("change", e => {
    console.log(e);
    if (e.target.checked) {
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
    } else {
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
    }
  });
  input.classList.add(classNames.TODO_CHECKBOX);

  let span = document.createElement("span");
  span.classList.add(classNames.TODO_TEXT);
  span.innerText = todo;

  let button = document.createElement("button");
  button.classList.add(classNames.TODO_DELETE);
  button.textContent = "Delete";
  button.addEventListener("click", e => {
    if (!e.toElement.parentElement.childNodes[0].checked) {
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
    }

    e.toElement.parentElement.remove();
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  list.appendChild(li);

  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
}
