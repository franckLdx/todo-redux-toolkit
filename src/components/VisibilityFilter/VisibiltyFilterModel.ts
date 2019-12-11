import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'VISIBILITY',
  initialState: 'ALL' as VisibilityFilterValues,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<{ visibilityFilter: VisibilityFilterValues }>) {
      state = action.payload.visibilityFilter;
    }
  }
});

export const reducer = slice.reducer;
export const { setVisibilityFilter } = slice.actions;

export type VisibilityFilterValues = 'ALL' | 'UNDONE' | 'DONE';