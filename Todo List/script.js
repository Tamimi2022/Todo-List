const ul = document.getElementById("todo-list"); // ul
const inputDescription = document.getElementById("input-description"); // Input

const doTasks = async () => {
    const todoList = await getTodoList();
    todoList.forEach(todo => {
        const li = document.createElement("li");
        const content = document.createElement("c");
        const todoText = document.createTextNode(todo.description);

        const checkBox = document.createElement("input");
        checkBox.classList.add("checkBox");
        checkBox.type = "checkBox";

        const removeTodoBtn = document.createElement("cek"); 
        removeTodoBtn.classList.add("fa-solid");
        removeTodoBtn.classList.add("fa-trash-can");
        removeTodoBtn.innerHTML = "&cross;"; 

        ul.appendChild(li);
        li.appendChild(checkBox);
        li.appendChild(content);
        content.appendChild(todoText);
        li.appendChild(removeTodoBtn);

        removeTodoBtn.addEventListener("click", () => {
            deleteTodo(todo._id);
        });
        checkBox.addEventListener("click", () => {
            contentTodo(todo._id);
        });
        content.addEventListener("click", () => {
            dataTodo(todo._id);
            ul.innerHTML = "";
            doTasks();
        });
    });
}
doTasks();

const btnAddTask = document.getElementById("btn-add-task");
btnAddTask.addEventListener("click", () => {
    postTodo();
    ul.innerHTML = "";
    doTasks();
    document.getElementById("input-description").value = '';
});

const removeTodo = () => {
    const removeTodoBtn = Array.from(document.getElementsByClassName("fa-solid"));
    removeTodoBtn.forEach(button => {
        button.addEventListener("click", e => {
            e.path[1].remove();
        });
    });
}
setInterval(removeTodo, 100);

const checkTodoList = () => {
    const checkAllBox = Array.from(document.getElementsByClassName("checkBox"));
    checkAllBox.forEach(box => {
        box.addEventListener("click", e => {
            e.path[1].classList.add("mark-done");
        });
    });
}
setInterval(checkTodoList, 100);