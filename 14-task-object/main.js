const ToDoList = {

  tasks: [],

  getUniqId: () => {
    let id = 1;
    return () => id++;
  },

  addTask(title, priority, id = ToDoList.getUniqId()) {
    this.tasks.push({ title, priority, id });
  },

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  updateTask(id, newTitle, newPriority) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      if (newTitle !== undefined) task.title = newTitle;
      if (newPriority !== undefined) task.priority = newPriority;
    }
  },

  sortTasksByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

ToDoList.addTask('Помыть посуду', 2);
ToDoList.addTask('Сделать домашку', 1);
console.log(ToDoList.tasks);