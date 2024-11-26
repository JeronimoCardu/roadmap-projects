
function generateId(){
    let id = Math.floor(Math.random() * (2**8))
    if(!allTasks.some(task => task.id == id)){
        return id 
    }else{
        return generateId()
    }
}

function addToDOM(){
    renderTasks()
    tasksDOM.innerHTML = "";
    allTasks.forEach(element => {
        tasksDOM.innerHTML += `
        <div id="${element.id}" class="my-task">
            <input type="checkbox" id="task-check-${element.id}" class="task-check" ${element.status == "complete" ? "checked" : ""}>
            <label id="task-label-${element.id}" class="task-label ${element.status == "complete" ? "complete" : ""}" for="task-check-${element.id}">${element.description}</label>
            <span id="${element.id}-delete" class="material-symbols-outlined deleteIcon">delete</span>
        </div>
        <hr>`;
        })
}


function addTask( task ){
    if(!allTasks.some(element => element.description == task)){
        allTasks.push({
            description: task,
            status: "added",
            id: generateId()
        })
    }
    
    addToDOM()
}


function deleteTask( task ){
    let idx = allTasks.findIndex(element => element.id == task.id.split("-")[0]);
    allTasks.splice(idx, 1);
    addToDOM()
}

function markedTask( task ){
    let idTask = task.id.split("-")[2]
    allTasks.forEach(el => {
        if(el.id == idTask && el.status == "added"){
            el.status = "complete"
        } else if(el.id == idTask && el.status == "complete"){
            el.status = "added"
        }
    })
    addToDOM()
}

function renderTasks(){
    allTasks.sort((a, b) => {
        if(a.status < b.status) return -1;
        if(a.status > b.status) return 1;
        return 0;
    })
}











const newTask = document.getElementById("adder-task")
const addBtn = document.getElementById("add-task-btn");
let tasksDOM = document.querySelector(".tasks")

let allTasks = [];
document.addEventListener("keypress", (t) => {
    if(t.key == "Enter" && newTask.value != "") addTask(newTask.value);
    newTask.value = ""
})
addBtn.addEventListener("click", () => {
    if(newTask.value != "") addTask(newTask.value)
    newTask.value = ""
})

tasksDOM.addEventListener("click", ( element ) => {
    if(element.target.classList.contains("deleteIcon")){
        deleteTask(element.target);
    }
})

tasksDOM.addEventListener("click", (element) => {
    if(element.target.classList.contains("task-check")){
        markedTask(element.target)
    }
})
