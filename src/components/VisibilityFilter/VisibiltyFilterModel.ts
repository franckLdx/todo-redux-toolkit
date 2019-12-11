import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'VISIBILITY',
  initialState: 'ALL' as VisibilityFilter,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<{ visibilityFilter: VisibilityFilter }>) {
      state = action.payload.visibilityFilter;
    }
  }
});

export const reducer = slice.reducer;
export const { setVisibilityFilter } = slice.actions;

type VisibilityFilter = 'ALL' | 'UNDONE' | 'DONE';