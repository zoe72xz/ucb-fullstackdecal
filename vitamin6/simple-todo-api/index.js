const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'todos.json');

app.use(express.json());

// Load todos from file if it exists
let todos = [];
if (fs.existsSync(DATA_FILE)) {
  const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
  todos = JSON.parse(fileData);
}

// Save todos to file
function saveTodosToFile() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;

  if (!task || task.trim() === '') {
    return res.status(400).json({ error: 'Task cannot be empty!' });
  }

  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  saveTodosToFile(); // Save to file
  res.status(201).json(newTodo);
});

// PUT (update) an existing todo
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  if (!task || task.trim() === '') {
    return res.status(400).json({ error: 'Task cannot be empty!' });
  }

  const todo = todos.find(t => t.id === parseInt(id));

  if (todo) {
    todo.task = task;
    saveTodosToFile(); // Save to file
    res.json(todo);
  } else {
    res.status(404).send('To-Do item not found');
  }
});

// DELETE a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== parseInt(id));
  saveTodosToFile(); // Save to file
  res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

