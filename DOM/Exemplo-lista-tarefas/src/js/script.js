const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value
    //cria um item
    const li = document.createElement("li")
    li.innerText = taskText

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'remover'
    removeBtn.style.marginLeft = '10px'

    // evento para remover o item
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li)
    })

    li.appendChild(removeBtn)
    taskList.appendChild(li)

    taskInput.value = ""
})

filterInput.addEventListener('input',()=>{


    const filterText = filterInput.value.toLowerCase()
    const tasks = document.querySelectorAll('li')


    console.log(filterText)

    tasks.forEach((task)=>{
        const taskName = task.firstChild.textContent.toLowerCase();

        if (taskName.includes(filterText)){
            task.classList.remove('hidden');
        }else{
            task.classList.add('hidden')
        }
    })

})