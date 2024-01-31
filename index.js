const list = document.querySelector(".list");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

let tasks=[]

const todoHandler = () => {
  if (input.value.trim()!=="") {
    const dataText = input.value
    const rundomNumber = Math.round(Math.random() * 100000)
    const task = {
      id:rundomNumber,
      text:dataText,
      completed:false
      
    }
    tasks.push(task)
    input.value=""
  }
  console.log(tasks);
}


btn.addEventListener("click",(event)=>{
  event.preventDefault()
  todoHandler()
  renderTodo(tasks)
})

document.addEventListener("DOMContentLoaded", ()=>{
    const themToglebtn = document.querySelector(".btn");
    const curenttThem = localStorage.getItem("them");


    if (curenttThem) {
        applyThem(curenttThem)
    }


themToglebtn.addEventListener("click",()=>{
    const newThem =document.body.classList.contains("dark")?"light":"dark"
    applyThem(newThem);
    localStorage.setItem("them",newThem)

  
})

function applyThem(them){
    document.body.classList.add(them)
}
})




function renderTodo(items) {
  const marcup = items.
  map((item)=>{
    return `<li>
    <label class="label">
    <input type="checkbox" class="checkbox" cheked="${item.completed}">
    <span class="custom__radio"></span>
    </label>
    <p>${item.text}</p>
    <button onclick="removeTodo(${item.id})">Видалити</button>
    </li>`
  })
  .join("")
  console.log(marcup);
 // localStorage.setItem('marcup', marcup);  
 // list.innerHTML=localStorage.getItem('marcup');
  list.innerHTML=marcup
  
}

// function removeTodo(id) {
//   const filteredTasks = tasks.filter((item)=>item.id!==id)
//   tasks=filteredTasks
// }

window.removeTodo=function (id) {
  const filteredTasks = tasks.filter((item)=>item.id!==id)
  tasks=filteredTasks
  renderTodo(tasks) 
  
}

document.addEventListener("DOMContentLoaded", ()=>{
  const themToglebtn = document.querySelector("btn");
  const curenttTask = localStorage.getItem("task");


  if (curenttTask) {
      applyTask(curenttTask)
  }


themToglebtn.addEventListener("click",()=>{
  const newTask =document.body.classList.contains("task");
  applyTask(newTask);
  localStorage.setItem("task",JSON.stringify(tasks))
})

function applyTask(task){
  document.body.classList.add(task)
  
}
})

localStorage.setItem('task', 1);

