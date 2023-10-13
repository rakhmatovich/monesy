import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {AiOutlineSetting, AiOutlineCalendar} from 'react-icons/ai'
import {FiPieChart} from 'react-icons/fi'
import {BsWallet2} from 'react-icons/bs'

function SideBar() {
    const {pathname} = useLocation()

    return (
        <div className='h-screen w-[20%] bg-primary'>
            <div className='w-[80%] mx-auto pt-10'>
                <img src="/logo-white.png" alt="logo"/>
            </div>
            <div
                className="avatar text-base-100 flex flex-col w-fit min-w-[70%] max-w-[90%] mx-auto justify-center pt-10">
                <div className="w-14 rounded-full mb-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                </div>
                <h1>Angelina Angel</h1>
                <h2 className="text-gray-500 text-sm">angelina@gmail.com</h2>
            </div>
            <div className="flex flex-col mt-20">
                <Link to='/'>
                    <div
                        className={`py-2 px-8 text-base-100 flex items-center gap-2 ${pathname === '/' && 'border-l-4 border-l-base-100'}`}>
                        <BsWallet2/> Dashboard
                    </div>
                </Link>
                <Link to='/analytics'>
                    <div
                        className={`py-2 px-8 text-base-100 flex items-center gap-2 ${pathname === '/analytics' && 'border-l-4 border-l-base-100'}`}>
                        <FiPieChart/> Analytics
                    </div>
                </Link>
                <Link to='/calendar'>
                    <div
                        className={`py-2 px-8 text-base-100 flex items-center gap-2 ${pathname === '/calendar' && 'border-l-4 border-l-base-100'}`}>
                        <AiOutlineCalendar/> Calendar
                    </div>
                </Link>
                <Link to='/settings'>
                    <div
                        className={`py-2 px-8 text-base-100 flex items-center gap-2 ${pathname === '/settings' && 'border-l-4 border-l-base-100'}`}>
                        <AiOutlineSetting/> Settings
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default SideBar;