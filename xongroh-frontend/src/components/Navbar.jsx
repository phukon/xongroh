import Assets from "@/assets/Assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 flex w-full flex-row justify-between bg-white px-10 py-3">
      <Link to="/home">
        <img className="h-8 w-8" src={Assets.home} alt="Home" />
      </Link>
      <Link to="/search">
        <img className="h-8 w-8" src={Assets.search} alt="About" />
      </Link>
      <Link to="/communities">
        <img className="h-8 w-8" src={Assets.world} alt="About" />
      </Link>
      <Link to="/profile">
        <img className="h-8 w-8" src={Assets.profile} alt="About" />
      </Link>
    </nav>
  );
};

export default Navbar;
