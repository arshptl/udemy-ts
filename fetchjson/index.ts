import axios from "axios";

const singleTodoUrl = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// type TodoUsingType = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

axios.get(singleTodoUrl).then((response) => {
  const todo = response.data as Todo;

  printLog(todo.id, todo.title, todo.completed);
});

const printLog = (id: number, title: string, completed: boolean) => {
  console.log(`
    Title of the todo: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
};
