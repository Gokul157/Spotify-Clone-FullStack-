import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home Icon" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="Search Icon" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>


            <div className='bg-[#121212] h-[80px] rounded p-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.stack_icon} alt="Library Icon" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="Plus Icon" />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It's easy; we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Lets find someone podcasts to follow</h1>
                    <p className='font-light'>we will keep you update on new updates</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Browse Products</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;