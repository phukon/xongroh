import { store } from '@/app/store'
import { usersApiSlice } from '@/features/users/usersApiSlice'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '@/features/auth/authSlice'

const Prefetch = () => {
  const token = useSelector(selectCurrentToken)

  useEffect(() => {
    if (token) {
      console.log('Prefetching data')

      const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

      return () => {
        console.log('Unsubscribing')
        users.unsubscribe()
      }
    }
  }, [token])

  if (!token) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default Prefetch
