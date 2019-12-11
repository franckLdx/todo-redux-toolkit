import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { reducer as todos } from '../features/Todos/TodoModel'
import { reducer as visibilityFilter } from '../features/VisibilityFilter/VisibiltyFilterModel'

const reducer = combineReducers({ todos, visibilityFilter });

export const store = configureStore({ reducer })

export type AppState = ReturnType<typeof reducer>;