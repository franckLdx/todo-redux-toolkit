import { configureStore, combineReducers, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk';

import { reducer as todosState } from '../features/Todos/TodoSlice'
import { reducer as visibilityFilter } from '../features/VisibilityFilter/VisibiltyFilterSlice'
import { restApiService } from '../services/reatApiFilter';

const reducer = combineReducers({ todosState, visibilityFilter });

const extraArg = { restApiService };
type ExtraArg = typeof extraArg;
const customizedThunk = getDefaultMiddleware({
  thunk: {
    extraArgument: extraArg
  },
})
export const store = configureStore({ reducer, middleware: [...customizedThunk] });

export type AppState = ReturnType<typeof reducer>;
export type AppAction = Action<any>;
export type AppThunk = ThunkAction<void, AppState, ExtraArg, AppAction>;