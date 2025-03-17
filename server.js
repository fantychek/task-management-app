const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];
let taskId = 1;

// Отримати всі задачі
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Створити задачу
app.post('/tasks', (req, res) => {
  const { title, status } = req.body;
  const task = { id: taskId++, title, status };
  tasks.push(task);
  res.status(201).json(task);
});

// Оновити задачу
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = tasks.find(t => t.id === parseInt(id));
  if (task) {
    task.title = title || task.title;
    task.status = status || task.status;
    res.json(task);
  } else {
    res.status(404).json({ error: "Задача не знайдена" });
  }
});

// Видалити задачу
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id !== parseInt(id));
  res.status(204).send();
});

// Добавить маршрут для корневого запроса
app.get('/', (req, res) => {
  res.send('Сервер працює');
});

app.listen(3000, () => {
  console.log('Сервер запущено на http://localhost:3000');
});
