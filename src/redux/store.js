import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { userServices } from './services/userServices'
import { usersSlice } from './users'

export const store = configureStore({
  reducer: {
    users : usersSlice,
    [userServices.reducerPath]: userServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userServices.middleware),
})

setupListeners(store.dispatch)