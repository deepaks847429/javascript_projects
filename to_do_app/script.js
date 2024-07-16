document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTodoItem(todoInput.value);
      todoInput.value = '';
  });

  function addTodoItem(task) {
      if (task.trim() === '') return;

      const li = document.createElement('li');
      li.className = 'todo-item';

      const taskText = document.createElement('span');
      taskText.textContent = task;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          todoList.removeChild(li);
      });

      li.appendChild(taskText);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
  }
});
