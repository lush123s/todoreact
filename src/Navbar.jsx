import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-green-800 p-5 flex justify-between items-center'>
  <h1 className='text-white font-bold text-2xl'>FireTasks</h1>
  <div className="left flex gap-8">
    <li  className='list-none text-[17px] text-white cursor-pointer hover:text-green-400 hover:transition-all'>Home</li>
    <li className='list-none text-[17px] text-white cursor-pointer hover:text-green-400 hover:transition-all'>Contact us</li>
    <li className='list-none text-[17px] text-white cursor-pointer hover:text-green-400 hover:transition-all'>About us</li>
    <li className='list-none text-[17px] text-white cursor-pointer hover:text-green-400 hover:transition-all'>Login</li>
  </div>
   </nav>
  )
}

export default Navbar
