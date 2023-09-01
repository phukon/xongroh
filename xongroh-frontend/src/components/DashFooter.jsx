import React from 'react'
import { Link } from 'react-router-dom'
import Assets from '@/assets/Assets'

const DashFooter = () => {
  return (
    <nav className="flex flex-row justify-between py-3 px-10 bg-white fixed bottom-0 left-0 w-full">
      <Link to="/dash/home">
        <img className='w-8 h-8' src={Assets.home} alt="Home"/>
      </Link>
      <Link to="/dash/search">
        <img className='w-8 h-8' src={Assets.search} alt="About"/>
      </Link>
      <Link to="/dash/communities">
        <img className='w-8 h-8' src={Assets.world} alt="About"/>
      </Link>
      <Link to="/dash/profile">
        <img className='w-8 h-8' src={Assets.profile} alt="About"/>
      </Link>
    </nav>
  )
}

export default DashFooter