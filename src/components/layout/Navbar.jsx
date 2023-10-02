import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import { BsCartDashFill } from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? '#9C27B0' : ''
  }
}

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false)
  return (


    <nav className="flex justify-around items-center py-4 bg-neutral">
      <div>
        <NavLink to='/' className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">The Phone Vault</NavLink>
      </div>
      <div className="hidden md:flex justify-around items-center gap-4">
        <NavLink to='/' style={navLinkStyles} className="text-xl font-semibold flex justify-center items-center gap-2 "><button className="btn btn-ghost">Home</button></NavLink>
        <NavLink to='/cart' style={navLinkStyles} className="text-xl font-semibold flex justify-center items-center gap-2 "><button className="btn btn-ghost">Cart<div className="text-xl"><BsCartDashFill /></div></button></NavLink>
        <NavLink to='/ordered-products' style={navLinkStyles} className="text-xl font-semibold flex justify-center items-center gap-2 "><button className="btn btn-ghost">Ordered</button></NavLink>
      </div>
      <div className="flex md:hidden justify-around items-center gap-4">

        <div className='p-4 mx-2 md:hidden' onClick={() => { setHamOpen(!hamOpen) }}>
          {
            hamOpen ? <FaWindowClose className='text-3xl ' /> : <AiOutlineMenu className='text-3xl text-white' />
          }
        </div>
        <div className={`md:flex absolute md:static mt-48 mr-36 p-4 bg-neutral ${hamOpen ? "block" : "hidden"}`} >
          
            <NavLink to='/' style={navLinkStyles} className="text-xl font-semibold flex justify-center items-center gap-2 "><button className="btn btn-ghost">Home</button></NavLink>
            <NavLink to='/cart' style={navLinkStyles} className="text-xl font-semibold flex justify-center items-center gap-2 "><button className="btn btn-ghost">Cart<div className="text-xl"><BsCartDashFill /></div></button></NavLink>
            <NavLink to='/ordered-products' style={navLinkStyles} className="text-xl font-semibold flex justify-center items-center gap-2 "><button className="btn btn-ghost">Ordered</button></NavLink>
          
        </div>

      </div>
    </nav>

  )
}

export default Navbar