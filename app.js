const text = document.querySelector(".text-box");
const dateInput = document.querySelector(".dateInput");
const addBtn = document.querySelector(".add");
const itemsContainer = document.querySelector(".items-container");

let project = "";
let date = "";

text.addEventListener("input", (e) => {

  project = e.target.value;
  if(!project){
    text.dataset.state = ''
    return;
  }
  const trimmed = project.trim();
  if(trimmed) {
    text.dataset.state = "valid";
  } else {
    text.dataset.state = "invalid";
 
  }
 
});

dateInput.addEventListener("change", function (e) {
  date = e.target.value;
});

addBtn.addEventListener("click", add);

// Add tasks
function add() {
  if(project && date){
    // items
    const liProject = document.createElement("li");
    liProject.classList = "task";
    const projectText = document.createTextNode(project);
    liProject.appendChild(projectText);
    // dates
    const liDate = document.createElement("li");
    const dateText = document.createTextNode(date);
    liDate.appendChild(dateText);
    liProject.appendChild(liDate);
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.classList = "delete";
    const delBtnText = document.createTextNode("DELETE");
    delBtn.addEventListener("click", del);
    delBtn.appendChild(delBtnText);
    liProject.appendChild(delBtn);
    itemsContainer.appendChild(liProject);
  }
  else{
    alert("type something!!")
    return;
  }
 
 
}

// Delete tasks

function del(e) {
  e.target.parentElement.remove();
}
