import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface deleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(API_URL);
    console.log("in the action")
    dispatch<fetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

// Todo:
// Need to create a action creator for deleteTodo
// 1. Returns a function that takes a dispatch function as an argument.
// 2. Write the logic: fetch the current state and delete the given todo
// 3. Dispatch the action to the reducer
export const deleteTodo = (id: number) : deleteTodoAction=> {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  }
}
