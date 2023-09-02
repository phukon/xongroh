import { store } from '@/app/store'
// import { postsApiSlice } from '@/features/posts/postsSlice'
import { usersApiSlice } from '@/features/users/usersSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
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
