import { BsCart4 } from 'react-icons/bs';
import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  Avatar

} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from "../Features/cartSlice";
const Header = () => {

  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.allCart);

  const userProfile = [
    {
      label: "My Profile",
      path: 'userprofile'
    },
    {
      label: "Sign Out",
      path: "logOut"

    },
  ];

  const [navi, setNavi] = useState(false)
  const handleclick = () => setNavi(!navi)


  return (
    <div className='w-full h-[100px] flex bg-[#FCBB04] text-white justify-between items-center px-4'>
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

        <li>
          <NavLink to='/cart' className="flex items-center">
            <BsCart4 className="text-2xl mr-2" />

          </NavLink>
        </li>
        <div className='flex gap-6 items-center justify-between md:w-full'>
          {!user && <NavLink to='/login' className="text-md text-black bg-white border py-2 px-6 font-bold hover:border-transparent rounded">
            Login
          </NavLink>}
          {user && <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="candice wu"
                  className="border border-blue-500 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />

              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              {userProfile.map(({ label, path }) => {
                return (
                  <MenuItem
                    key={label}
                    onClick={() => {
                      closeMenu();
                      if (path === 'logOut') {
                        dispatch(clearData());
                      } else {
                        nav(`/${path}`)
                      }

                    }}
                    className="flex items-center gap-2 rounded">
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>}
        </div>

      </ul>


      {/* icon */}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!navi ? <FaBars /> : <FaTimes />}
      </div>


      {/* mobile */}
      <ul className={
        !navi
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }>
        <li className='py-2 text-[25px]'>  <NavLink onClick={handleclick} to='/' className='text-xl'>Home</NavLink></li>

        <li className="relative group">
          <NavLink to='#' className='hover:bg-pink-500' >Category</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-[#5C4434]">
            <li> <NavLink onClick={handleclick} to='/cate/electronics' className='hover:bg-pink-500'  >electronics</NavLink></li>
            <li> <NavLink onClick={handleclick} to='/cate/jewelery' className='hover:bg-pink-500' >jewelery</NavLink></li>
            <li>  <NavLink onClick={handleclick} to="/cate/men's clothing" className="hover:bg-pink-500">men's clothing</NavLink></li>
            <li><NavLink onClick={handleclick} to="/cate/women's clothing" className='hover:bg-pink-500' >women's clothing</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink onClick={handleclick} to='/cart' className="flex items-center py-2 text-[25px]">
            <BsCart4 className="text-2xl mr-2" />
          </NavLink>
        </li>

        <div className='flex gap-6 items-center justify-between md:w-full'>
          {!user && <NavLink onClick={handleclick} to='/login' className="text-md text-black bg-white border py-2 px-6 font-bold hover:border-transparent rounded  text-[25px]">
            Login
          </NavLink>}
          {user && <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="candice wu"
                  className="border border-blue-500 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />

              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              {userProfile.map(({ label, path }) => {
                return (
                  <MenuItem
                    key={label}
                    onClick={() => {
                      closeMenu();
                      if (path === 'logOut') {
                        dispatch(clearData());
                      } else {
                        nav(`/${path}`)
                      }

                    }}
                    className="flex items-center gap-2 rounded">
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>}
        </div>


      </ul>









    </div>

  );
};

export default Header;