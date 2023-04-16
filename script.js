let btn = document.querySelector(".btn-add");
let list = document.querySelector(".list");
let displayError = document.querySelector(".displayError");

let itemArray = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
];

let currentIndex = 0;

btn.addEventListener("click", () => {
  if (currentIndex < itemArray.length) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-item");
    li.textContent = itemArray[currentIndex];
    list.appendChild(li);

    currentIndex++;
  } else if (currentIndex == itemArray.length) {
    displayError.textContent = "No more items to add";
    displayError.classList.add("error");
  }
});
