import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk';
import reducer from './rootReducer'
import middleware, { ExtraArg } from './middlewares'

export const store = configureStore({ reducer, middleware });

export type AppState = ReturnType<typeof reducer>;
export type AppAction = Action<any>;
export type AppThunk = ThunkAction<void, AppState, ExtraArg, AppAction>;