import React from 'react'
import { NavLink } from 'react-router-dom'

const inactiveLink = 'px-3 py-2 text-lg font-bold text-gray-200 hover:bg-blue-700 duration-150 rounded'
const activeLink = inactiveLink.replace('text-gray-200', 'text-blue-200')
  
const linkStyle = (navData) => 
navData.isActive ? activeLink : inactiveLink;

const Navbar = () => {
  return (
    <div className='py-3 px-10 bg-blue-900 flex justify-between w-full'>
      <h1 className='text-xl font-bold text-white pt-2'>Sujamas</h1>
      <div className='flex justify-center gap-5'>
        <NavLink to='/' className={linkStyle}>Home</NavLink>
        <NavLink to='/about' className={linkStyle}>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar