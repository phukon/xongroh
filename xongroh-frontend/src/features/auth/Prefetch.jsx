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
      store.dispatch(usersApiSlice.util.prefetch('getUsers', 'User', { force: true }))
    }
  }, [token])

  if (!token) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default Prefetch
