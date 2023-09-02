import { Routes, Route } from "react-router-dom";
import LoginPage from "@/scenes/loginPage";
import RegisterPage from "@/scenes/registerPage";
import HomePage from "@/scenes/homePage/HomePage";
import PageNotFound from "@/scenes/pageNotFound/PageNotFound";
import SearchPage from "@/scenes/searchPage/SearchPage";
import MyCommunities from "@/scenes/communities/MyCommunities";
import CommunityPost from "@/scenes/communities/communityPost";
import Profile from "@/scenes/profile/Profile";
import Layout from "@/scenes/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="communities" element={<MyCommunities />} />
        <Route path="communitypost" element={<CommunityPost />}></Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
