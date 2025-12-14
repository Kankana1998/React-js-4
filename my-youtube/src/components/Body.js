import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex min-h-screen bg-gray-50'>
        <Sidebar />
        <main className='flex-1 overflow-x-hidden'>
          <Outlet />
        </main>
    </div>
  )
}

export default Body