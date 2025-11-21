const todo = {
  title: 'Attend a conference',
  description: 'Head over to PAA for the conference',
  dueDate: '2025-08-15',
  priority: 'urgent',
};

const academic = {
  name: 'Academic',
  todos: [],
};

const spiritual = {
  name: 'Spiritual',
  todos: [],
};

const projects = [academic, spiritual];

projects[0].todos.push(todo);
projects[1].todos.push(todo);

projects[1].todos[]

console.log(projects);

// // Academic, Spiritual, Financial

// const projects = [project];
