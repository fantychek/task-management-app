const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["InProgress", "Completed"], default: "InProgress" },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
