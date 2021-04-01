import createTask from './task-card';

let mainDiv = document.getElementById('proj-container');
mainDiv.appendChild(createTask("t1","do the dishes", "3/4/2021"));

function addTaskFunc() {
    console.log("In the event handler");
    let projContainer = document.getElementById('proj-container');
    projContainer.style.display = "none";
    let taskInput = document.getElementById("taskInput");
    taskInput.style.display = "block";
    cardBtn.addEventListener("click", addCard);
    //console.log("Task name:" + taskInput.taskTitle.textContent);
    console.log("task name"+taskInput.taskTitle.value);
}

function addCard() {
    let taskForm = document.getElementById("taskInput");
    console.log("in add card");
    //console.log("date: ");
    console.log(taskForm.taskTitle.value +"--"+taskForm.taskDesc.value+"--"+taskForm.endDate.value);
    mainDiv.appendChild(createTask(taskForm.taskTitle.value, taskForm.taskDesc.value, taskForm.endDate.value));
    const storeObj = {"title": taskForm.taskTitle.value, "desc":  taskForm.taskDesc.value, "endDate": taskForm.endDate.value}
    storage.setItem(taskForm.taskTitle.value, JSON.stringify(storeObj));
    console.log(storage);
}

function crossOut(e){
    console.log("in crossOut");
    console.log("check box: "+ e.target.checked);
    if(e.target.checked === true){

        //let taskText = document.getElementById(e.target.id);
        taskText.strike();
    }
}

const taskBtn = document.getElementById("addTask");
taskBtn.addEventListener("click",addTaskFunc);
const cardBtn = document.getElementById("add-card");
let storage = window.sessionStorage;
const keys = Object.keys(storage);
console.log(keys);
console.log(JSON.parse(storage[keys[1]]).title);
keys.forEach(key => {
    if(!key.includes("IsThisFirst"))
    mainDiv.appendChild(createTask(JSON.parse(storage[key]).title, JSON.parse(storage[key]).desc, JSON.parse(storage[key]).endDate))});
const checkBoxes = document.querySelectorAll(".check-task");
console.log(checkBoxes);
checkBoxes.forEach(cb => {
    cb.addEventListener("change", crossOut);
});
