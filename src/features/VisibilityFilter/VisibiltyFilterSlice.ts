import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type VisibilityFilterValues = 'ALL' | 'UNDONE' | 'DONE';

interface VisibilityFilterState {
  filter: VisibilityFilterValues;
}

const initialState: VisibilityFilterState = { filter: 'ALL' };

const slice = createSlice({
  name: 'VISIBILITY',
  initialState: initialState,
  reducers: {
    changed(state, action: PayloadAction<{ visibilityFilter: VisibilityFilterValues }>) {
      state.filter = action.payload.visibilityFilter;
    }
  }
});

export const reducer = slice.reducer;
export const { changed } = slice.actions;
