import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let baseUrl = 'https://gorest.co.in/public/v1'

export const userServices = createApi({
    reducerPath: 'userServices',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      listUsers: builder.query({
        query: (page = 1) => `users?page=${page}`,
      }),
      getUser: builder.query({
        query: (id = 1) => `users/${id}`,
      }),
    }),
  })
  
  export const { useListUsersQuery, useGetUserQuery } = userServices