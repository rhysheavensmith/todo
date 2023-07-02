const textInput = document.querySelector(".input");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  if (textInput.value.length > 0) {
    // Create the li
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    li.innerText = textInput.value;
    // Create the delete button
    delBtn.innerText = "delete";
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
});
