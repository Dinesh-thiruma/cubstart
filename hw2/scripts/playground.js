// BEGIN PART 2
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
// END PART 2

// BEGIN PART 3

let count = 0;

addButton.addEventListener("click", () => {
  count += 1;
  countDisplay.innerHTML = count;
});

subtractButton.addEventListener("click", () => {
  count -= 1;
  countDisplay.innerHTML = count;
});

// END PART 3

// BEGIN PART 5

// END PART 5

// BEGIN PART 6

submitButton.addEventListener("click", () => {});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
});

// END PART 6

taskName.addEventListener("input", () => {
  if (taskName.value == "Cal Hacks") {
    countDisplay.style.color = "steelblue";
  }
});
