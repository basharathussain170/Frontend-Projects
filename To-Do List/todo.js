const inputBox = document.getElementById("input-box");
let listContainer = document.querySelector(".list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData(); //use to store new data in localStorage
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(); //checked data will store in the browser
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); // after remove the task rest of the data will store in localStorage
  }
});

//use to store data in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//use to show stored previous data which is inside the Browser
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
