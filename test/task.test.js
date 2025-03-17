const { createTask } = require('../src/task'); // Припустимо, що функція createTask знаходиться у цьому файлі

test('Створення задачі', () => {
  const task = createTask("Нова задача", "InProgress");
  expect(task.title).toBe("Нова задача");
  expect(task.status).toBe("InProgress");
});
