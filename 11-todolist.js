// Load existing list from localStorage or use default
const toDoList = JSON.parse(localStorage.getItem('todoList')) || [
  { name: 'dinner', dueDate: '25-07-2025' },
  { name: 'playing', dueDate: '25-07-2025' }
];

renderTodoList();

// Render the to-do list
function renderTodoList() {
  let todolistHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const { name, dueDate } = toDoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        deleteToDo(${i});
      " class="delete-button">Delete</button>
    `;

    todolistHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

// Add a new to-do item
function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-dueDate-input');
  const dueDate = dateInputElement.value;

  if (!name || !dueDate) return;

  toDoList.push({ name, dueDate });
  inputElement.value = '';
  dateInputElement.value = '';

  saveToLocalStorage();
  renderTodoList();
}

// Delete a to-do item
function deleteToDo(index) {
  toDoList.splice(index, 1);
  saveToLocalStorage();
  renderTodoList();
}

// Save the list to localStorage
function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(toDoList));
}