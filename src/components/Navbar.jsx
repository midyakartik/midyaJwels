import React from 'react'
import {IoMdCart} from 'react-icons/io'
import { BrowserRouter, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='w-full flex justify-center '>
      
      <div className='lg:w-3/6 w-11/12 flex items-center justify-between'>
        <Link className='underline' to="/">Home</Link>
        <Link className='underline' to="/">Products</Link>
        <img className='w-28' src="images/logo.png" alt="" />
        <Link className='underline' to="/">Collections</Link>
        
        <Link to='/cart'> <IoMdCart size={'1.5rem'}/> </Link>
      </div>
      
    </nav>
  )
}

export default Navbar