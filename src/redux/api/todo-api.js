import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: '',
  header: { 'Content-type': 'application/json' },
});

//Get All Todos
export const getAllTodos = async () => {
  try {
    const todos = await instanceAxios.get('/todos?_limit=5');

    return todos.data;
  } catch (err) {
    return console.error(err);
  }
};

// Create New Todo
export const createTodo = async (title) => {
  try {
    const todo = await instanceAxios.post(`/todos`, {
      title: title,
    });

    return todo.data;
  } catch (err) {
    return console.error(err);
  }
};

// Delete existed todo
export const deleteExitedTodo = async (id) => {
  try {
    await instanceAxios.delete(`/todos/${id}`);

    return id;
  } catch (err) {
    return console.error(err);
  }
};
