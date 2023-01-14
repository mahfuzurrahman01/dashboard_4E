import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../Navbar/MainNavbar';
import Sidebar from '../Navbar/Sidebar';
import SidebarTwo from '../Navbar/SidebarTwo';

const Main = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div className='flex lg:gap-x-3 gap-x-2 justify-center'>
                <div className='w-[25%]'>
                    <Sidebar></Sidebar>
                </div>
                <div className='w-full bg- rounded-tr-xl rounded-tl-xl p-3'>
                    <Outlet></Outlet>
                </div>
                <div className='w-[26%]'>
                    <SidebarTwo></SidebarTwo>
                </div>
            </div>
        </div>
    );
};

export default Main;