import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { reducer as todos } from '../features/todoModel'

const reducer = combineReducers({ todos });

export const store = configureStore({ reducer })

export type AppState = ReturnType<typeof reducer>;