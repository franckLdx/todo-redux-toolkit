import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";

const initialState: TodosState = { status: "INIT", todos: [] };

export const slice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    updated(state, action: PayloadAction<{
      id: number,
      done: boolean
    }>) {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.done = action.payload.done;
      }
    },
    removed(state, action: PayloadAction<{ id: number }>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    loading(state) {
      state.status = 'LOADING';
    },
    loaded(state, action: PayloadAction<{ todos: Todos }>) {
      state.status = 'LOADED';
      state.todos = action.payload.todos;
    },
    loadError(state) {
      state.status = 'ERROR';
    }
  },
});

export const { loading, loaded, loadError, updated, removed } = slice.actions;
export const reducer = slice.reducer;

type Status = "INIT" | "LOADING" | "ERROR" | "LOADED";
export type TodosState = { status: Status, todos: Todos };

export type Todo = {
  id: number
  description: string;
  done: boolean;
};

export type Todos = Array<Todo>;

export function loadTodos(): AppThunk {
  return async (dispatch, _, { restApiService }) => {
    dispatch(loading());
    try {
      const todos = await restApiService.loadTodos();
      dispatch(loaded({ todos }));
    } catch (err) {
      dispatch(loadError());
    }
  }
}
