const formTodo = document.querySelector('#formTodo');
const textFieldTodo = document.querySelector('#textFieldTodo');
const listTodo = document.querySelector('.listTodo');
const ClearBtn = document.querySelector('#ClearBtn');
const boxOshowOffer = document.querySelector('.boxOshowOffer');

formTodo.addEventListener('submit', TaskTodo)

function TaskTodo(e) {
    e.preventDefault()

    const textTask = textFieldTodo.value.trim()
    const tasks = {
        id: Date.now(),
        text: textTask,
    }

    if (textTask === "") {
        alert("Please Enter Your Task")
    } else {
        const li = document.createElement('li');
        li.classList = ".task"
        li.dataset.id = tasks.id
        li.innerHTML =
            `<li class="task">
                <span>${tasks.text}</span>
                <a href="#" id ="Active">🟢</a>
                <a href="#" id="Delete">🗑</a>
            </li>`

        listTodo.appendChild(li)

        textFieldTodo.value = ""

        boxOshowOffer.style.display = "none"



        ClearBtn.addEventListener('click', function () {
            handleClear(li)
        })
        AddLocalStorage(textTask)
        attachEvent(li,)
    }



}

function handleClear(li) {
    li.remove()
}


function AddLocalStorage(textTask) {
    // const oldMessage = JSON.parse(localStorage.getItem("tasks") || [])
    // oldMessage.push(textTask)
    // localStorage.setItem("tasks", JSON.stringify(oldMessage))
}
function attachEvent(li, id) {

    const active = li.querySelector('#Active')

    active.addEventListener('click', function () {
        handleActive(li)
    })

    const DeleteBtn = li.querySelector('#Delete')

    DeleteBtn.addEventListener('click', function () {
        handleDelete(li, id)
    })

}

function handleActive(li) {
    li.style.backgroundColor = "#a5fb8fd0"
    li.style.borderRadius = "10px"
}

function handleDelete(li, id) {
    const newtesk = tasks.id;

    console.log(newtesk);
}





