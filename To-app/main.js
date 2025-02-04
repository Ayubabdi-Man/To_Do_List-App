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

    }
}

function handleClear(li) {
    li.remove()
}

