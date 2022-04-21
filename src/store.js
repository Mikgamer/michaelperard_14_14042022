import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'

const employeeSlice = createSlice({
  name : "employee",
  initialState : { employees: [] },
  reducers: {
    add(state, action) { state.employees = [ ...state.employees, action.payload ] } 
  }
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, employeeSlice.reducer)

const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor }
export const { add } = employeeSlice.actions