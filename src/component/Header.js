import React from 'react'
import { NavLink } from 'react-router-dom'
// import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {

 

  return (
    <div className='w-full h-[100px] flex bg-black text-white justify-between items-center px-4'>
      <div>
        <NavLink to='/' className='text-xl'>Home</NavLink>
      </div>

      {/* menu */}

      <ul className='hidden md:flex justify-evenly'>

        <li className="relative group">

          <NavLink to='#' className='hover:bg-pink-500' >Category</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-[#5C4434]">
            <li> <NavLink to='/cate/electronics' className='hover:bg-pink-500'  >electronics</NavLink></li>
            <li> <NavLink to='/cate/jewelery' className='hover:bg-pink-500' >jewelery</NavLink></li>
            <li>  <NavLink to="/cate/men's clothing" className="hover:bg-pink-500">men's clothing</NavLink></li>
            <li><NavLink to="/cate/women's clothing" className='hover:bg-pink-500' >women's clothing</NavLink></li>
          </ul>
        </li>
        
        <li><NavLink to= '/cart'>CART-(0)</NavLink></li>
       {/* <li><NavLink to= '/cart'>CART-</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li> */}

      </ul>





     
    




    </div>
  
  );
};

export default Header;