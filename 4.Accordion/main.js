let buttons = document.querySelectorAll(".question-btn");

function printMe(button) {
  button.addEventListener("click", function () {
    let currentElement = this,
      getElement = currentElement.parentNode.parentNode,
      displayContent = getElement.querySelector(".question-text");
    displayContent.style.display = "block";
  });
}
buttons.forEach(printMe);
