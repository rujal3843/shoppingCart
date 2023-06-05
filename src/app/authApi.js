import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1"
    }),
    endpoints: (builder) => ({

        userLogin: builder.mutation({
            query: (q) => ({
                url: '/auth/login',
                method: 'POST',
                body: q,
               
            })
        })
    })
})

export const {useUserLoginMutation} = authApi