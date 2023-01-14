import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoNotificationsOutline } from 'react-icons/io5';
import logo from '../assets/Black & White Minimalist Business Logo.png'
const MainNavbar = () => {
    return (
        <div className="navbar bg-base-100 mb-4">
            <div className="flex-1">
                <img src={logo} alt="logo" className='h-16 contrast-75' />
                <input type="text" className='bg-lime-300 bg-opacity-40 ml-5 w-[30%] px-3 py-2 rounded-lg' placeholder='Search' />
                <FaSearch className='text-gray-300 w-5 h-5 absolute left-[38%]'></FaSearch>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                           <HiOutlineMail className='w-6 h-6'></HiOutlineMail>
                            <span className="badge badge-sm indicator-item">1</span>
                        </div>
                    </label>

                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                           <IoNotificationsOutline className='w-6 h-6'></IoNotificationsOutline>
                            <span className="badge badge-sm indicator-item">4</span>
                        </div>
                    </label>
                    
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt=''/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between" href='# '>
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href='# '>Settings</a></li>
                        <li><a href='# '>Logout</a></li>
                    </ul>
                </div>
                <select name="" id="">
                    <option className='font-semibold' value="">Super Admin</option>
                    <option className='font-semibold' value="">Super Admin</option>
                    <option className='font-semibold' value="">Super Admin</option>
                    <option className='font-semibold' value="">Super Admin</option>
                </select>
                <HiOutlineBars3 className='w-7 h-7 ml-3'></HiOutlineBars3>
            </div>
        </div>
    );
};

export default MainNavbar;