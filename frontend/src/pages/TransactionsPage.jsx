import React from 'react';
import Layout from "../components/Layout.jsx";
import {GrFormAdd} from "react-icons/gr";

function TransactionsPage() {
    return (
        <Layout>
            <div className="w-[80%] h-screen overflow-y-scroll p-10 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-2xl font-bold">Transactions</h1>
                    <p className="btn btn-outline-info mr-6 flex items-center">
                        Add more <GrFormAdd size={20}/>
                    </p>
                </div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/food.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Central Burger</h1>
                        <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                    </div>
                    <p className="text-xl font-semibold">-$138.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/health.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Health Pharmacy</h1>
                        <p className="text-xs text-gray-400">Health and care</p>
                    </div>
                    <p className="text-xl font-semibold">-$530.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/income.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Ibon terminal</h1>
                        <p className="text-xs text-gray-400">Card replenishment</p>
                    </div>
                    <p className="text-xl font-semibold text-success">$400.00</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/food.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Central Burger</h1>
                        <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                    </div>
                    <p className="text-xl font-semibold">-$138.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/shopping.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Zara home</h1>
                        <p className="text-xs text-gray-400">Shopping</p>
                    </div>
                    <p className="text-xl font-semibold">-$230.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/food.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Central Burger</h1>
                        <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                    </div>
                    <p className="text-xl font-semibold">-$138.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/health.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Health Pharmacy</h1>
                        <p className="text-xs text-gray-400">Health and care</p>
                    </div>
                    <p className="text-xl font-semibold">-$530.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/income.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Ibon terminal</h1>
                        <p className="text-xs text-gray-400">Card replenishment</p>
                    </div>
                    <p className="text-xl font-semibold text-success">$400.00</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/food.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Central Burger</h1>
                        <p className="text-xs text-gray-400">Cafe and Restaurant</p>
                    </div>
                    <p className="text-xl font-semibold">-$138.56</p>
                </div>
                <div className="divider"></div>
                <div className='flex px-14 items-center justify-between'>
                    <img className="w-6" src="/icons/shopping.png" alt="icon"/>
                    <div className='w-[50%]'>
                        <h1 className='font-semibold'>Zara home</h1>
                        <p className="text-xs text-gray-400">Shopping</p>
                    </div>
                    <p className="text-xl font-semibold">-$230.56</p>
                </div>
                <div className="divider"></div>
            </div>
        </Layout>
    );
}

export default TransactionsPage;