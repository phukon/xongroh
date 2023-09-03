import React from 'react'
import { Link } from 'react-router-dom'
import Assets from '@/assets/Assets'

const DashFooter = () => {
  return (
    <nav className="fixed bottom-0 left-0 flex w-full flex-row justify-between bg-white px-10 py-3">
      <Link to="/dash">
        <img className="h-8 w-8" src={Assets.home} alt="Home" />
      </Link>
      <Link to="/dash/search">
        <img className="h-8 w-8" src={Assets.search} alt="About" />
      </Link>
      <Link to="/dash/communities">
        <img className="h-8 w-8" src={Assets.world} alt="About" />
      </Link>
      <Link to="/dash/profile">
        <img className="h-8 w-8" src={Assets.profile} alt="About" />
      </Link>
    </nav>
  )
}

export default DashFooter
