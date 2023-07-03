// Store the elements from the html in variables
const textInput = document.querySelector(".input");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");

// function to create list item
const createItem = () => {
  const li = document.createElement("li");
  li.classList.add("listItem");

  const span = document.createElement("span");
  span.innerText = textInput.value;
  span.addEventListener("click", function () {
    span.classList.toggle("complete");
  });

  li.appendChild(span);

  const delBtn = createDelete();
  li.appendChild(delBtn);

  list.appendChild(li);
};

// function to create a delete button
const createDelete = () => {
  const delBtn = document.createElement("button");

  delBtn.innerText = "delete";
  delBtn.classList.add("deleteButton");

  delBtn.addEventListener("click", function () {
    this.parentNode.remove();
  });
  return delBtn;
};

// function to add the to do to the list
const addToDo = () => {
  const trimValue = textInput.value.trim();

  if (trimValue.length > 0) {
    createItem();
    textInput.value = "";
  }
};

// Add event listeners to the button and the enter key
button.addEventListener("click", addToDo);

textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    addToDo();
  }
});
