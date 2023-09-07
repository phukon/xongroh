import { store } from '@/app/store'
// import { postsApiSlice } from '@/features/posts/postsSlice'
import { usersApiSlice } from '@/features/users/usersApiSlice'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '@/features/auth/authSlice'

const Prefetch = () => {
  const token = useSelector(selectCurrentToken)
  if (!token) {
    return <Navigate to="/login" />
  }

  useEffect(() => {
    console.log('subscribing')
    // const posts = store.dispatch(postsApiSlice.endpoints.getPosts.initiate())
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return () => {
      console.log('unsubscribing')
      // posts.unsubscribe()
      users.unsubscribe()
    }
  }, [])

  return <Outlet />
}
export default Prefetch
