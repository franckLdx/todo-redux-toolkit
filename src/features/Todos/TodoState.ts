import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../state/store";

const initialState: TodosState = { status: "INIT", todos: [] };

export const slice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    setDone(state, action: PayloadAction<{
      id: number,
      done: boolean
    }>) {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) { todo.done = action.payload.done; }
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    setLoaded(state, action: PayloadAction<{ todos: Todos }>) {
      state.status = 'LOADED';
      state.todos = action.payload.todos;
    }
  },
});

export const { remove, setDone, setLoaded } = slice.actions;
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
    const todos = await restApiService.loadTodos();
    dispatch(setLoaded({ todos }));
  }
}
