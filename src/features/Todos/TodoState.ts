import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../state/store";
import { batch } from "react-redux";

const initialState: Todos = [];

export const slice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      state = state.filter(todo => todo.id !== action.payload.id);
    },
    setDone(state, action: PayloadAction<{
      id: number,
      done: boolean
    }>) {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) { todo.done = action.payload.done; }
    },
  },
});

export const { add, remove, setDone } = slice.actions;
export const reducer = slice.reducer;

export type Todo = {
  id: number
  description: string;
  done: boolean;
};

export type Todos = Array<Todo>;

export function loadTodos(): AppThunk {
  return async (dispatch, _, { restApiService }) => {
    const todos = await restApiService.loadTodos();
    batch(() => {
      todos.forEach(todo => dispatch(add(todo)));
    });
  }
}