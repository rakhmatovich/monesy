import React from 'react';
import {AiOutlineRight} from "react-icons/ai";
import {Link} from "react-router-dom";

function Transactions() {
    return (
        <div className="w-[25%] h-screen p-10 flex flex-col">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-2xl font-bold">Transactions</h1>
                <Link to='/transactions'>
                <p className="text-xs text-gray-400 flex items-center">
                    View all
                    <AiOutlineRight />
                </p>
                    </Link>
            </div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/food.png" alt="icon"/>
                <div className='w-[50%]'>
                    <h1 className='font-semibold'>Central Burger</h1>
                    <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                </div>
                <p className="text-xl font-semibold">-$138.56</p>
            </div>
            <div className="divider"></div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/health.png" alt="icon"/>
                <div className='w-[50%]'>
                    <h1 className='font-semibold'>Health Pharmacy</h1>
                    <p className="text-xs text-gray-400">Health and care</p>
                </div>
                <p className="text-xl font-semibold">-$530.56</p>
            </div>
            <div className="divider"></div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/income.png" alt="icon"/>
                <div className='w-[50%]'>
                    <h1 className='font-semibold'>Ibon terminal</h1>
                    <p className="text-xs text-gray-400">Card replenishment</p>
                </div>
                <p className="text-xl font-semibold text-success">$400.00</p>
            </div>
            <div className="divider"></div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/food.png" alt="icon"/>
                <div className='w-[50%]'>
                    <h1 className='font-semibold'>Central Burger</h1>
                    <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                </div>
                <p className="text-xl font-semibold">-$138.56</p>
            </div>
            <div className="divider"></div>
            <div className='flex items-center justify-between'>
                <img className="w-6" src="/icons/shopping.png" alt="icon"/>
                <div className='w-[50%]'>
                    <h1 className='font-semibold'>Zara home</h1>
                    <p className="text-xs text-gray-400">Shopping</p>
                </div>
                <p className="text-xl font-semibold">-$230.56</p>
            </div>
            <div className="divider"></div>

            <div className="flex-1 cursor-pointer bg-primary text-base-100 flex flex-col justify-between p-8 rounded-xl">
                <h1 className='font-semibold text-xl'>How to reduce<br/>spending by<br/>20%?</h1>
                <p className="text-xs text-gray-400 flex items-center">
                    Tell me more
                    <AiOutlineRight />
                </p>
            </div>
        </div>
    );
}

export default Transactions;