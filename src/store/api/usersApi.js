
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const headers = {
    'Authorization': "Bearer 64a0c69f716920b6a61cc45e710e7fd015f1cea6b021272b1f81ff3fedd53d32",
    'Content-Type': 'application/json'
  }

export const handleUsersApi = createApi({
    reducerPath: 'handleUsersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://gorest.co.in/public/v2' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ( ) => ({
                url: `/users/`,
                method: 'GET',
                headers,
            }),
            providesTags: ['task']
        }),

        postUsers: builder.mutation({
            query: (user) =>({
                url: `/users`,
                method: 'POST',
                headers,
                body: user 
            }),
            invalidatesTags: ['task'],
        }),

        UpdateUsers: builder.mutation({
            query: ( user ) =>({
                url: `users/${ user.id }`,
                method: 'PUT',
                headers,
                body: user 
            }),
            invalidatesTags: ['task'],
        }),

        deleteUsers: builder.mutation({
            query: ( id ) =>({
                url: `/users/${ id }`,
                method: 'DELETE',
                headers,
                
            }),
            invalidatesTags: ['task'],
        }),
    }),
})



export const { useGetUsersQuery, usePostUsersMutation, useDeleteUsersMutation, useUpdateUsersMutation, useGetUserQuery } = handleUsersApi