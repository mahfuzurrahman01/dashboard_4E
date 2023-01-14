import React from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';

const SecondRow = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-xl font-semibold mb-2 mt-1'>Recent Client testimonials</h1>
                </div>
                <div className=" bg-white rounded-xl p-2">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>person</th>
                                <th>Provider</th>
                                <th>Company</th>
                                <th>Routing</th>
                                <th>Data added</th>
                                <th>Review</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=' font-semibold'><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/70/30/people" alt='' />
                                    </div>
                                </label></td>
                                <td>Quality Control Specialist</td>
                                <td><progress className="progress progress-red-200 w-20" value="40" max="100"></progress></td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td><label for="Toggle1" className="inline-flex items-center cursor-pointer  text-gray-100">
                                    <span className="relative">
                                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-5 rounded-full shadow-inner  bg-lime-300 bg-opacity-70 peer-checked: "></div>
                                        <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                    </span>
                                </label></td>
                                <td className='flex justify-between items-center'><AiOutlineEyeInvisible className='w-6 h-6'></AiOutlineEyeInvisible> <HiDotsVertical className='w-5 h-5 text-gray-500'></HiDotsVertical></td>

                            </tr>
                            <tr>

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/70/40/people" alt='' />
                                    </div>
                                </label>
                                <td>Desktop Support Technician</td>
                                <td><progress className="progress progress-red-200 w-20" value="60" max="100"></progress></td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td><label for="Toggle1" className="inline-flex items-center cursor-pointer  text-gray-100">
                                    <span className="relative">
                                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-5 rounded-full shadow-inner  bg-lime-300 bg-opacity-70 peer-checked: "></div>
                                        <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                    </span>
                                </label></td>
                                <td className='flex justify-between items-center'><AiOutlineEyeInvisible className='w-6 h-6'></AiOutlineEyeInvisible> <HiDotsVertical className='w-5 h-5 text-gray-500'></HiDotsVertical></td>

                            </tr>
                            <tr>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/60/70/people" alt='' />
                                    </div>
                                </label>
                                <td>Tax Accountant</td>
                                <td><progress className="progress progress-red-200 w-20" value="70" max="100"></progress></td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td><label for="Toggle1" className="inline-flex items-center cursor-pointer  text-gray-100">
                                    <span className="relative">
                                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-5 rounded-full shadow-inner  bg-lime-300 bg-opacity-70 peer-checked: "></div>
                                        <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                    </span>
                                </label></td>
                                <td className='flex justify-between items-center'><AiOutlineEyeInvisible className='w-6 h-6'></AiOutlineEyeInvisible> <HiDotsVertical className='w-5 h-5 text-gray-500'></HiDotsVertical></td>

                            </tr>

                            <tr>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/70/70/people" alt='' />
                                    </div>
                                </label>
                                <td>Tax Accountant</td>
                                <td><progress className="progress progress-red-200 w-20" value="30" max="100"></progress></td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td><label for="Toggle1" className="inline-flex items-center cursor-pointer  text-gray-100">
                                    <span className="relative">
                                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-5 rounded-full shadow-inner  bg-lime-300 bg-opacity-70 peer-checked: "></div>
                                        <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                    </span>
                                </label></td>
                                <td className='flex justify-between items-center'><AiOutlineEyeInvisible className='w-6 h-6'></AiOutlineEyeInvisible> <HiDotsVertical className='w-5 h-5 text-gray-500'></HiDotsVertical></td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default SecondRow;