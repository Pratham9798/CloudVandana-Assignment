function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `
      ${taskText}
      <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;
    todoList.appendChild(li);
    taskInput.value = '';
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }