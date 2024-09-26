
/* let ctr = 0
function callback(){
  console.log(ctr);
  ctr = ctr+1;
}
setInterval(callback,1000); */

let counter = 1;

//function to add new item 
function addTodo(){
  const input = document.querySelector("#input");
  const value = input.value;

  if(value.trim()){ //trim() will remove extra whitespaces
    const list = document.querySelector("#list");
    const todoDiv = createTodoElement(value);

    list.appendChild(todoDiv);

    counter++;
    input.value=""; //clear the input box
  }
  else{
    alert("Please put something !!");
  }
}

function createTodoElement(value){
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo-item";

  const inputElement = createInputElement(value);
  const updateBtn = createUpdateButton(inputElement);
  const deleteBtn = createDeleteButton(todoDiv);

  todoDiv.appendChild(inputElement);
  todoDiv.appendChild(updateBtn);
  todoDiv.appendChild(deleteBtn);

  return todoDiv;
}

function createInputElement(value){
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = value;
  inputElement.readOnly = true;
  inputElement.id = "todo-"+counter;

  return inputElement;
}

function createUpdateButton(inputElement){
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Edit";

  updateBtn.onclick = function (){
    if(inputElement.readOnly){
      inputElement.readOnly = false;
      updateBtn.textContent = "Save";
      inputElement.focus();//It becomes active element 
      //that will receive keyboard input and other events by default.
      inputElement.style.outline = "1px solid #007BFF";
    }
    else{
      inputElement.readOnly = true;
      updateBtn.textContent = "Edit";
      inputElement.style.outline = "none";
    }
  };
  return updateBtn;
}

function createDeleteButton(todoDiv){
  const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function (){
      const list = document.querySelector("#list");
      list.removeChild(todoDiv);
    };
    return deleteBtn;
}