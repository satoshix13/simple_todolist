window.addEventListener('load', formload)

let task_list = []

function formload(load){
  let form = document.querySelector('#taskForm')
  form.addEventListener('submit',formHandler)

 

  
}

function formHandler(submit){
  submit.preventDefault()
  let formInput = document.querySelector('form #formInput')
  
  if(formInput.value === ""){
    alert("Write the task, please")
  }

  if(formInput.value != ""){
      let currentDate = new Date()

      let taskItem = '<li class="todo-list-item" data-id="'+ currentDate.getTime() +'"><div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox">'+formInput.value+'<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline remove-btn" ></i></li>'

      let task_wrap = document.querySelector('#testClass')
      previous_task = task_wrap.innerHTML + taskItem

      task_wrap.innerHTML = previous_task

      

      task_list.push({id: currentDate.getTime(), name: formInput.value, completed: false})
      console.info(task_list)

     

      let remove_buttons = document.querySelectorAll('li i.remove')
      for(i=0;i<remove_buttons.length;i++){
        let remove_button = remove_buttons[i]
        remove_button.addEventListener('click',removeTask)
      }

      let checkBoxList = document.querySelectorAll('li input')
      for(i=0;i<checkBoxList.length;i++){
        let checkBox = checkBoxList[i]
        checkBox.addEventListener('click', add_class)
      }

      formInput.value = ''
      formInput.focus()

  }
}

function removeTask(event){
  event.preventDefault()
  let task_item = event.currentTarget.parentNode
  let taskId = parseInt(task_item.dataset.id)
  
  let task_index = task_list.findIndex(function(item){
    return item.id === taskId
  })
  
  if(task_index > -1){
    task_list.splice(task_index,1)
  }
  
  task_item.remove()
}

function add_class(event){
  event.preventDefault()
  let task = event.currentTarget.parentNode.parentNode.parentNode
  
  task.classList.toggle('completed')
}





// <!-- tarea completada -->
// <li class="completed">
//     <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" checked=""> For what reason would it be advisable for me to think. <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline" ></i>
// </li>
