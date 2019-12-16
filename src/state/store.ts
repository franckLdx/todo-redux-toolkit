import { configureStore, combineReducers, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk';

import { reducer as todos } from '../features/Todos/TodoState'
import { reducer as visibilityFilter } from '../features/VisibilityFilter/VisibiltyFilterState'
import { restApiService } from '../services/reatApiFilter';

const reducer = combineReducers({ todos, visibilityFilter });

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