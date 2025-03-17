import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Задача 1", status: "InProgress" },
    { id: 2, title: "Задача 2", status: "Completed" },
  ]);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map(task =>
      task.id == taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Задачі</h2>
      <div
        onDrop={(e) => handleDrop(e, "InProgress")}
        onDragOver={(e) => e.preventDefault()}
      >
        <h3>В роботі</h3>
        {tasks
          .filter(task => task.status === "InProgress")
          .map(task => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
            >
              {task.title}
            </div>
          ))}
      </div>
      <div
        onDrop={(e) => handleDrop(e, "Completed")}
        onDragOver={(e) => e.preventDefault()}
      >
        <h3>Завершено</h3>
        {tasks
          .filter(task => task.status === "Completed")
          .map(task => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
            >
              {task.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default TaskList;
