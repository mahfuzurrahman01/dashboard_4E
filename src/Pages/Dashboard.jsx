import React from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import PieCharts from '../Share/PieCharts';
import SecondRow from '../Share/SecondRow';


const Dashboard = () => {
    return (
        <div>
            <section className="p-2">
                <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-3 space-x-2 rounded-lg md:space-x-3 bg-white hover:scale-105 duration-500 cursor-pointer">
                        <div className="flex justify-center p-2 align-middle rounded-full text-fuchsia-700 sm:p-4  bg-gray-200 ">
                        <BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-2xl font-bold leading-none">3,258</p>
                            <p className="py-1 text-gray-500 text-xs">Total Organizations</p>
                        </div>
                    </div>

                    <div className="flex p-3 space-x-2 rounded-lg md:space-x-3 bg-white hover:scale-105 duration-500 cursor-pointer">
                        <div className="flex justify-center p-2 align-middle rounded-full text-cyan-600 sm:p-4  bg-gray-200 ">
                        <BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-2xl font-bold leading-none">24,894</p>
                            <p className="py-1 text-gray-500">Total Feedback</p>
                        </div>
                    </div>
                    <div className="flex p-3 space-x-2 rounded-lg md:space-x-3 bg-white hover:scale-105 duration-500 cursor-pointer">
                        <div className="flex justify-center p-2 align-middle rounded-full text-amber-500 sm:p-4  bg-gray-200 ">
                        <BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-2xl font-bold leading-none">1258</p>
                            <p className="py-1 text-gray-500">Total products</p>
                        </div>
                    </div>
                    <div className="flex p-3 space-x-2 rounded-lg md:space-x-3 bg-white hover:scale-105 duration-500 cursor-pointer">
                        <div className="flex justify-center p-2 align-middle rounded-full text-pink-600 sm:p-4  bg-gray-200 ">
                        <BsFillGrid1X2Fill className='lg:w-5 lg:h-5'></BsFillGrid1X2Fill>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-2xl font-bold leading-none">$ 3.5B</p>
                            <p className="py-1 text-gray-500">Total coat</p>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* chart section row 2  */}

            <div className='my-2'>
                <div className='lg:p-2 p-1 rounded-xl'>
                    <PieCharts></PieCharts>
                </div>
            </div>
            <div className='lg:my-4 my-3'>
                <SecondRow></SecondRow>
            </div>
        </div>
    );
};

export default Dashboard;