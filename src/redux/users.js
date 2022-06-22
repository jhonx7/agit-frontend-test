import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../services/users'

// let usersData = getUsers()
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        // pagination : {
        //     total: usersData.meta.pagination.total ?? null,
        //     pages: usersData.meta.pagination.pages ?? null,
        //     page: usersData.meta.pagination.page ?? null,
        //     limit: usersData.meta.pagination.limit ?? null,
        //     links: {
        //       previous: usersData.meta.pagination.links.previous ?? null,
        //       current: usersData.meta.pagination.links.current ?? null,
        //       next: usersData.meta.pagination.links.next ?? null
        //     }
        //   },
        users : {}
    },
    reducers: {
      setUsers: (state, action) => {
       state.data = action.payload
      },
      deleteUserById: (state, action) => {
       let newState = state.data.filter((item) => item.id !== action.payload)
       state.data = newState
      },
    },
  })
  
  export const { setUsers, deleteUserById } = usersSlice.actions
  
  export default usersSlice.reducer