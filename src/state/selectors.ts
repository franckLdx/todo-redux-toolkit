import { AppState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const getAllTodos = (state: AppState) => state.todos;
export const getTodoById = (state: AppState, id: number) => state.todos.find(todo => todo.id === id);

export const getVisibilityFilter = (state: AppState) => state.visibilityFilter.filter

export const getFilteredTodos = createSelector(
  [getAllTodos, getVisibilityFilter], (todos, filter) => {
    switch (filter) {
      case 'ALL':
        return todos;
      case 'DONE':
        return todos.filter(todo => todo.done);
      case 'UNDONE':
        return todos.filter(todo => !todo.done);
      default:
        throw Error(`Unexpected filter value: ${filter}`);
    }
  }
);