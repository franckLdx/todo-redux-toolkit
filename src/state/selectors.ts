import { AppState } from "./store";

export const todosSelect = (state: AppState) => state.todos;
export const todoSelect = (state: AppState, id: number) => state.todos.find(todo => todo.id === id);