'use strict'

const getUniqId = () => {
  let id = 1;
  return () => id++;
}

const ToDoList = {

  tasks: [],

  lastId: getUniqId(),

  addTask(title, priority, description = '', id = this.lastId()) {
    this.tasks.push({ title, priority, description, id });
  },

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  updateTask(id, newTitle, newPriority, newDescription) {

    const task = this.tasks.find(task => task.id === id);
    if (task) {
      if (newTitle !== undefined) task.title = newTitle;
      if (newPriority !== undefined) task.priority = newPriority;
      if (newDescription !== undefined) task.description = newDescription;
    }
  },

  sortTasksByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

ToDoList.addTask('Помыть посуду', 2, 'Использовать новое моющее средство');

console.log(ToDoList.tasks);