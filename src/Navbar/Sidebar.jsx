import React from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs'

import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='top-0 sticky'>
            <div className='w-full p-2 mx-auto rounded-t-lg bg-white flex flex-col gap-y-2'>

                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Main Tools</span></h1>

                <NavLink to='/dashboard' className={({ isActive }) => isActive ? "scale-105 bg-lime-400 border-r-4 border-green-700" : "scale-100 bg-white"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Dashboard</span></h1>
                </NavLink>
                <NavLink to='/clients' className={({ isActive }) => isActive ? "scale-105 bg-lime-400 border-r-4 border-green-700" : "scale-100 bg-white"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Applications</span></h1>
                </NavLink>
                <NavLink to='/folio' className={({ isActive }) => isActive ? "scale-105 bg-lime-400 border-r-4 border-green-700" : "scale-100 bg-white"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Management</span></h1>
                </NavLink>
             
                    <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill><span>Monitoring</span></h1>
                
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Finance</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Feedback Box</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Report</span></h1>
                <h1 className='bg-white mb-10 bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Projects</span></h1>

                <h1 className='bg-white mb-2 bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer text-gray-400 uppercase'><span>Support</span></h1>
                

                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Organizations</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Leaderboard</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Events</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Advertisements</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-2 text-center  font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill> <span>Tickets</span></h1>
                

            </div>
        </div>
    );
};

export default Sidebar;