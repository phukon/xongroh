import React from 'react'
import DashHeader from '@/components/DashHeader'
import DashFooter from '@/components/DashFooter'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <>
        <DashHeader/>
        <div className='dash-container'>
            <Outlet/>
        </div>
        <DashFooter/>
    </>
  )
}

export default DashLayout