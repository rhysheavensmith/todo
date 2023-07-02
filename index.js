const textInput = document.querySelector(".input");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");

function createItem() {
  if (textInput.value.length > 0) {
    // Create the li
    const li = document.createElement("li");
    li.innerText = textInput.value;
    li.classList.add("listItem");
    // Create the delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("space");
    // Add the items to the list
    list.appendChild(li);
    li.appendChild(delBtn);
    // Reset the input value to an empty string
    textInput.value = "";
    // Add event listeners to the item and the delete button
    li.addEventListener("click", function () {
      li.classList.toggle("complete");
    });
    delBtn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
}

button.addEventListener("click", createItem);

textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    createItem();
  }
});
