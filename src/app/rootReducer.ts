import { reducer as todosState } from '../features/Todos/TodoSlice'
import { reducer as visibilityFilter } from '../features/VisibilityFilter/VisibiltyFilterSlice'
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({ todosState, visibilityFilter });