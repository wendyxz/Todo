const form = document.getElementById('form');
const input= document.getElementById('input');
const todos= document.getElementById('todos');


form.addEventListener('submit', (event) => {
    // prevent form from submitting
    event.preventDefault();
    // get input text
    const todoText = input.value;
    // create li item from input text and append to to-do list
    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        // click to check item off
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });
        // right click to delete item from list
        todoEl.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            todoEl.remove();
        });
        todos.appendChild(todoEl);
        // empty input box
        input.value = '';
    }
});

