import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Todos = [
  { id: 0, description: 'First', done: false },
  { id: 1, description: 'Second', done: false },
  { id: 2, description: 'Third', done: false },
  { id: 3, description: 'Fourth', done: false },
];

export const slice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    add(state, action: PayloadAction<TodoData>) {
      const todoState: Todo = {
        id: todoId,
        ...action.payload
      }
      state.push(todoState);
      todoId += 1;
    },
    remove(state, action: PayloadAction<TodoId>) {
      state = state.filter(todo => todo.id !== action.payload.id);
    },
    setDone(state, action: PayloadAction<TodoId & {
      done: boolean
    }>) {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) { todo.done = action.payload.done; }
    },
  },
});

export const { add, remove, setDone } = slice.actions;
export const reducer = slice.reducer;

interface TodoId { id: number };

interface TodoData {
  description: string;
  done: boolean;
}

export type Todo = TodoId & TodoData;

export type Todos = Array<Todo>;

let todoId = initialState.length;