const getUniqId = () => {
  let id = 1;
  return () => id++;
}

const ToDoList = {

  tasks: [],

  lastId: getUniqId(),

  addTask(title, priority, id = this.lastId()) {
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

const newTask = {
  tasks: []
}

newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.removeTask = ToDoList.removeTask.bind(newTask);

newTask.updateTask = function (id, newTitle, newPriority, newDescription) {
  const task = this.tasks.find(task => task.id === id);

  if (task) {
    if (newTitle !== undefined) task.title = newTitle;
    if (newPriority !== undefined) task.priority = newPriority;
    if (newDescription !== undefined) task.description = newDescription;
  }
}.bind(newTask);

newTask.sortTasksByPriority = ToDoList.sortTasksByPriority.bind(newTask);

newTask.addTask('Посмотреть мультики', 1, newTask.tasks.length + 1);
newTask.updateTask(1, 'Обновленная задача', 3, 'Обновленное описание');
newTask.sortTasksByPriority();

console.log(newTask.tasks);