const formTodo = document.querySelector('#formTodo');
const textFieldTodo = document.querySelector('#textFieldTodo');
const listTodo = document.querySelector('.listTodo');
const ClearBtn = document.querySelector('#ClearBtn');
const boxOshowOffer = document.querySelector('.boxOshowOffer');

formTodo.addEventListener('submit', TaskTodo)

function TaskTodo(e) {
    e.preventDefault()

    const textTask = textFieldTodo.value.trim()

    console.log(textTask);

    const tasks = {
        id: Date.now(),
        text: textTask,
    }

    if (tasks == " ") {
        alert("Please Enter Task...")
    }

}