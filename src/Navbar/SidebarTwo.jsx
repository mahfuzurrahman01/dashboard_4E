import React from 'react';
import Calendar from 'moedim';

const SidebarTwo = () => {
    return (
        <div>
            <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer  text-gray-800">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                <span className="px-4 py-2 rounded-l-md  border-b-2 border-lime-300 peer-checked:border-b-2 font-semibold">Calender</span>
                <span className="px-4 py-2 rounded-r-md  border-lime-300  peer-checked:border-b-2">Overview</span>
            </label>
            <Calendar className="bg-gray-100 p-2 rounded-lg" />
            <div>
                <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer  text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <span className="px-4 py-2 rounded-l-md  border-b-4 border-lime-300 peer-checked:border-b-4 font-semibold">Tickets</span>
                    <span className="px-4 py-2 rounded-r-md  border-lime-300  peer-checked:border-b-4 border-lime-300">Overview</span>
                </label>
                <div>
                    <div className='p-2 my-1'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://s.tmimgcdn.com/scr/800x500/182700/degrade-c-modele-de-logo-violet_182758-original.jpg" alt="" className='w-7 h-7 rounded-full' />
                                <p className='font-bold'>IBM</p>
                            </div>
                            <p>Today</p>
                        </div>
                        <p className='text-xs my-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima delectus autem. Vitae aliquam.</p>
                        <div className='flex justify-between'>
                            <button className='bg-lime-300 bg-opacity-70 py-1 px-2 font-semibold'>Browser</button>
                            <button className='bg-gray-300 bg-opacity-50 py-1 px-2 font-semibold border-2 border-gray-400' >Add to Reminder</button>
                        </div>
                    </div>
                    <div className='p-2 my-1'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://s.tmimgcdn.com/scr/800x500/182700/degrade-c-modele-de-logo-violet_182758-original.jpg" alt="" className='w-7 h-7 rounded-full' />
                                <p className='font-bold'>IBM</p>
                            </div>
                            <p>Today</p>
                        </div>
                        <p className='text-xs my-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima delectus autem. Vitae aliquam.</p>
                        <div className='flex justify-between'>
                            <button className='bg-lime-300 bg-opacity-70 py-1 px-2 font-semibold'>Browser</button>
                            <button className='bg-gray-300 bg-opacity-50 py-1 px-2 font-semibold border-2 border-gray-400' >Add to Reminder</button>
                        </div>
                    </div>
                    <div className='p-2 my-1'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://s.tmimgcdn.com/scr/800x500/182700/degrade-c-modele-de-logo-violet_182758-original.jpg" alt="" className='w-7 h-7 rounded-full' />
                                <p className='font-bold'>IBM</p>
                            </div>
                            <p>Today</p>
                        </div>
                        <p className='text-xs my-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima delectus autem. Vitae aliquam.</p>
                        <div className='flex justify-between'>
                            <button className='bg-lime-300 bg-opacity-70 py-1 px-2 font-semibold'>Browser</button>
                            <button className='bg-gray-300 bg-opacity-50 py-1 px-2 font-semibold border-2 border-gray-400' >Add to Reminder</button>
                        </div>
                    </div>
                    <div className='p-2 my-1'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://s.tmimgcdn.com/scr/800x500/182700/degrade-c-modele-de-logo-violet_182758-original.jpg" alt="" className='w-7 h-7 rounded-full' />
                                <p className='font-bold'>IBM</p>
                            </div>
                            <p>Today</p>
                        </div>
                        <p className='text-xs my-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima delectus autem. Vitae aliquam.</p>
                        <div className='flex justify-between'>
                            <button className='bg-lime-300 bg-opacity-70 py-1 px-2 font-semibold'>Browser</button>
                            <button className='bg-gray-300 bg-opacity-50 py-1 px-2 font-semibold border-2 border-gray-400' >Add to Reminder</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SidebarTwo;