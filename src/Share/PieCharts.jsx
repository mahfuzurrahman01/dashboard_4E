import React from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { FaArrowCircleDown } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        gmt:5000,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 4210,
        gmt:4000,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
        gmt:6000,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 4000,
        gmt:1000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
        gmt:3000,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
        gmt:500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
        gmt:5000,
    },
];



const PieCharts = () => {

    return (
        <div className='grid lg:grid-cols-6 grid-cols-1 gap-5 bg-white p-3 rounded-lg'>
            <div className=' lg:p-2 p-0 rounded-md col-span-2 bg-lime-300 bg-opacity-40'>
                <div className='pl-3'>
                    <h1 className='text-md font-bold'>Organizations By Industry</h1>
                    <p className='text-sm font-semibold text-gray-500 mb-2'>Lorem ipsum dolor sit amet.</p>
                </div>
                <hr />
                <div className='flex justify-between py-1 px-1 items-center'>
                    <h1 className='px-2 text-gray-500 py-2 font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5 text-gray-500'></BsFillGrid1X2Fill> <span>Technology</span></h1>
                    <p className='font-semibold text-gray-500'>1020</p>
                </div>
                <div className='flex justify-between py-1 px-1 items-center'>
                    <h1 className='px-2 text-gray-500 py-2 font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5 text-gray-500'></BsFillGrid1X2Fill> <span>Education</span></h1>
                    <p className='font-semibold text-gray-500'>523</p>
                </div>
                <div className='flex justify-between py-1 px-1 items-center'>
                    <h1 className='px-2 text-gray-500 py-2 font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5 text-gray-500'></BsFillGrid1X2Fill> <span>Manufacturing</span></h1>
                    <p className='font-semibold text-gray-500'>320</p>
                </div>
                <div className='flex justify-between py-1 px-1 items-center'>
                    <h1 className='px-2 text-gray-500 py-2 font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5 text-gray-500'></BsFillGrid1X2Fill> <span>Finance</span></h1>
                    <p className='font-semibold text-gray-500'>220</p>
                </div>
                <div className='flex justify-between py-1 px-1 items-center'>
                    <h1 className='px-2 text-gray-500 py-2 font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5 text-gray-500'></BsFillGrid1X2Fill> <span>F56</span></h1>
                    <p className='font-semibold text-gray-500'>20</p>
                </div>
                <div className='flex justify-between py-1 px-1 items-center'>
                    <h1 className='px-2 text-gray-500 py-2 font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsFillGrid1X2Fill className='lg:w-5 lg:h-5 text-gray-500'></BsFillGrid1X2Fill> <span>Orders</span></h1>
                    <p className='font-semibold text-gray-500'>$45B</p>
                </div>
            </div>

            <div className=' flex flex-col gap-5 justify-center col-span-4'>
                <div className='ml-8 flex justify-between'>
                    <div>
                        <p className='text-gray-600 font-semibold'>Applications Resources This Year</p>
                        <p className='text-xs font-semibold text-lime-400'>2023</p>
                    </div>
                    <div>
                        <FaArrowCircleDown className='w-5 h-5 text-gray-500'></FaArrowCircleDown>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#00c7ff" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="amt" stroke="#ffe44f" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="gmt" stroke="#ff4fe7" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#ca4fff" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PieCharts;