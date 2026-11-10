
//Todo

// 1. Select HTML elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// 2. Application state
let todos = [];
let currentFilter = "all";
let clickTimer;

// 3. Create a task element
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

// 4. Display tasks
function renderTodos() {
    todoList.innerHTML = "";

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;
    });

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

// 5. Add a task
function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    renderTodos();
}

// 6. Toggle task completion
function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }

        return todo;
    });

    renderTodos();
}

// 7. Delete a task
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// 8. Update remaining task count
function updateStats() {
    const remaining = todos.filter(todo => !todo.completed).length;

    itemsLeft.textContent = `${remaining} items left`;
}

// 9. Change task filter
function filterTodos(filter) {
    currentFilter = filter;

    filters.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });

    renderTodos();
}

// 10. Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") return;

    addTodo(taskText);
    input.value = "";
});

// 11. Event delegation for task clicks
todoList.addEventListener("click", function(event) {
    const task = event.target.closest("li");

    if (!task) return;

    const id = Number(task.dataset.id);

    if (event.target.closest(".delete-btn")) {
        clearTimeout(clickTimer);
        deleteTodo(id);
        return;
    }

    if (event.target.tagName === "INPUT") return;

    // Wait briefly to distinguish single and double clicks
    if (event.detail === 1) {
        clickTimer = setTimeout(function() {
            toggleTodo(id);
        }, 250);
    }

    if (event.detail === 2) {
        clearTimeout(clickTimer);
    }
});

// 12. Bonus: Edit tasks on double-click
todoList.addEventListener("dblclick", function(event) {
    const span = event.target.closest("span");

    if (!span) return;

    const task = span.closest("li");
    const id = Number(task.dataset.id);

    const todo = todos.find(todo => todo.id === id);

    if (!todo) return;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = todo.text;

    span.replaceWith(editInput);
    editInput.focus();
    editInput.select();

    editInput.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    editInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const newText = editInput.value.trim();

            if (newText !== "") {
                todo.text = newText;
            }

            renderTodos();
        }

        if (event.key === "Escape") {
            renderTodos();
        }
    });
});

// 13. Filter button events
filters.forEach(button => {
    button.addEventListener("click", function() {
        filterTodos(button.dataset.filter);
    });
});

// 14. Clear completed tasks
clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// 15. Initialize application
renderTodos();
