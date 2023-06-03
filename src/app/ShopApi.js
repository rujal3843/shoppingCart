import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({

    getAll: builder.query({
     query:()=>({
      url:'products',
     })
    }),

    getSingle:builder.query({
      query:(id)=>({
        url: `products/${id}`,
      })
    }),

    getCategory: builder.query({
      query:(query)=>({
        url:`products/category/${query}`,
      })
    }),


  }),
})


export const { useGetAllQuery, useGetSingleQuery,useGetCategoryQuery} = shopApi