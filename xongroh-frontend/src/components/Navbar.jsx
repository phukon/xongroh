import Assets from '@/assets/Assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-3.5 px-10 bg-white fixed bottom-0 left-0 w-full">
      <Link to="/home">
        <img src={Assets.home} alt="Home"/>
      </Link>
      <Link to="/search">
        <img src={Assets.search} alt="About"/>
      </Link>
      <Link to="/communities">
        <img src={Assets.world} alt="About"/>
      </Link>
      <Link to="/profile">
        <img src={Assets.profile} alt="About"/>
      </Link>
    </nav>
  )
}

export default Navbar