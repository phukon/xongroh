import { Routes, Route } from 'react-router-dom'
// import LoginPage from '@/scenes/loginPage'
// import RegisterPage from '@/scenes/registerPage'
import HomePage from '@/scenes/homePage/HomePage'
import PostPage from '@/scenes/postPage/PostPage'
import PageNotFound from '@/scenes/pageNotFound/PageNotFound'
import Search from '@/features/search/routes/Search'
import MyCommunities from '@/scenes/communities/MyCommunities'
import CommunityPage from '@/scenes/communities/CommunityPage'
import Profile from '@/scenes/profile/Profile'
import Layout from '@/scenes/Layout'
import Prefetch from '@/features/auth/Prefetch'
import DashLayout from '@/components/DashLayout'
import UsersList from '@/features/users/UsersList'
import AuthenticationPage from '@/scenes/onboard'
import UserPage from '@/features/users/UserPage'
import PersistLogin from '@/features/auth/PersistLogin'
import Public from '@/features/auth/Public'

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
              <Route index element={<HomePage />} />
              <Route path="search" element={<Search />} />
              <Route path="communities" element={<MyCommunities />} />
              <Route path="profile" element={<Profile />} />
              <Route path="communitypage" element={<CommunityPage />} />
              <Route path="postpage" element={<PostPage />} />
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
