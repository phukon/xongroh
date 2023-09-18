import { apiSlice } from '../api/apiSlice'
import { logOut } from './authSlice'
import { setCredentials } from '@/features/auth/authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: { ...userData },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(logOut())
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState())
        }, 1500)
        } catch (err) {
          console.log(err)
        }
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
            const { data } = await queryFulfilled
            // console.log(data)
            const { accessToken } = data
            dispatch(setCredentials({ accessToken }))
        } catch (err) {
            console.log(err)
        }
    }
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice
