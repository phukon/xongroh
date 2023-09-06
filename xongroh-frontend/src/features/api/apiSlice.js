import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api-version1',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/v1/' }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({}),
})
