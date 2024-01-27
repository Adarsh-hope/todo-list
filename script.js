let popOverTask =[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let taskForm = document.querySelector("#taskForm");
let taskInputValue = document.querySelector("#taskInput");
const taskDateValue = document.querySelector("#taskDate");
let taskTimeValue = document.querySelector("#taskTime");
const taskList = document.querySelector('#taskList')
const emptyMessage = document.querySelector("#emptyMessage")
const dropdownButton = document.querySelector("#dropdownButton")
let finishedList = document.querySelector("#finishedList");
let finishedListTitle = document.querySelector("#finishedListTitle");
let clearButton = document.querySelector("#clearButton")
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
 

document.addEventListener('DOMContentLoaded',function(){
    taskForm.addEventListener("submit", (event)=>{
        event.preventDefault()

            // get the task input value
            let taskInput = taskInputValue.value.trim()
        
            // check if the input is not empty
            if(taskInput.trim() !== ""){
                // create a new list item
                let li = document.createElement("li")
                let checkBox = document.createElement("input");
                checkBox.type = "checkbox"

                // styles for list
                li.style.border ="2px solid #093f61"
                li.style.borderRadius = "10px"
                li.style.listStyleType = "none";
                li.style.paddingTop = ".5rem";
                li.style.paddingBottom=".5rem";
                li.style.paddingLeft = "1rem";
                li.style.font = "20px"
                li.style.color = "white";
                li.style.marginBottom = "1rem"
                li.style.backgroundColor = "#064063"

                // set the text content of the list item

                taskList.append(li);
                li.innerText = taskInput
                li.appendChild(checkBox).style.marginLeft = "1rem"
                
                // clear input field
                taskInputValue.value = "";
                
                // hide the empty message
                emptyMessage.style.display = 'none';
                finishedListTitle.style.display = "";

            }else{
                // alert the user if the input is empty
                alert("please enter a task before adding")
            }
        
    })
});

// add eventListener to checkboxes

taskList.addEventListener("change", function(event){
    if(event.target.type === "checkbox" && event.target.checked){
        let taskText = event.target.parentElement.textContent.trim();
        let finishedListItem = document.createElement("li");
        finishedListItem.style.color = "white"
        finishedListItem.innerHTML = taskText;
        finishedList.appendChild(finishedListItem)
        event.target.parentElement.remove();
    }
})


// clear the finished list

clearButton.addEventListener("click", function(){
    finishedList.innerHTML = "";
})



function updateDropdownButton(selectedItem) {
    // Update the text of the dropdown button
    document.getElementById('dropdownButton').textContent = selectedItem;
}


// document.addEventListener('DOMContentLoaded', function(){
//     taskForm.addEventListener("submit", function(event){
//         event.preventDefault()
//         let inputValuetask = taskInput.value.trim();
//         let inputValueDate = taskDate.value;
//         let inputValueTime = taskTime.value;

//         console.log(inputValuetask)
//         console.log(inputValueDate)
//         console.log(inputValueTime)

//     })
// })
