// Store the elements from the dom in variables
const textInput = document.querySelector(".input");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");

// function to create list item
const createItem = () => {
  const li = document.createElement("li");
  li.innerText = textInput.value;
  li.classList.add("listItem");
  li.addEventListener("click", function () {
    li.classList.toggle("complete");
  });
  list.appendChild(li);
  const delBtn = createDelete();
  li.appendChild(delBtn);
};

// function to create a delete button
const createDelete = () => {
  const delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("space");
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
