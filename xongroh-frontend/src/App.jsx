import { Routes, Route } from "react-router-dom";
import LoginPage from "@/scenes/loginPage";
import RegisterPage from "@/scenes/registerPage";
import HomePage from "@/scenes/homePage/HomePage";
import PageNotFound from "@/scenes/pageNotFound/PageNotFound";
import SearchPage from "@/scenes/searchPage/SearchPage";
import MyCommunities from "@/scenes/communities/MyCommunities";
import CommunityPage from "@/scenes/communities/CommunityPage";
import Profile from "@/scenes/profile/Profile";
import Layout from "@/scenes/Layout";
import Public from "@/components/Public";
import Prefetch from "@/features/auth/Prefetch";
import DashLayout from "@/components/DashLayout";
import Welcome from "@/features/auth/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashLayout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<Prefetch />}>
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />

            <Route path="home" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="communities" element={<MyCommunities />} />
            <Route path="profile" element={<Profile />} />
            <Route path="communitypage" element={<CommunityPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
