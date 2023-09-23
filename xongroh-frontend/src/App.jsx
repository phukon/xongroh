import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Search from '@/features/search/routes/Search'
import Profile from './features/profile/routes/Profile'
import Layout from '@/scenes/Layout'
import Prefetch from '@/features/auth/Prefetch'
import DashLayout from '@/components/DashLayout'
import UsersList from '@/features/users/UsersList'
import AuthenticationPage from '@/scenes/onboard'
import UserPage from '@/features/users/UserPage'
import PersistLogin from '@/features/auth/PersistLogin'
import Public from '@/features/auth/Public'
import UserNotFound from '@/scenes/userNotFound/UserNotFound'
import EditProfileForm from './features/profile/components/EditProfileForm'
import Home from '@/features/home/routes/Home'
import Communities from '@/features/community/routes/Communities'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<AuthenticationPage />} />
        {/* <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} /> */}
        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="communities" element={<Communities />} />
              <Route path="profile/:id" element={<Profile />} />
              <Route path="profile/:id/edit" element={<EditProfileForm />} />
              <Route path="profile/user-not-found" element={<UserNotFound />} />
              {/* <Route path="communitypage" element={<CommunityPage />} /> */}
              {/* <Route path="postpage" element={<PostPage />} /> */}
              <Route path="users">
                <Route index element={<UsersList />} />
                <Route path=":userId" element={<UserPage />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
