import React, {useState} from 'react';
import {BiSolidBellRing} from 'react-icons/bi'
import {months} from "../utils/month.js";
import MyCard from "./MyCard.jsx";
import AddCardForm from "./AddCardForm.jsx";

function Dashboard() {
    const [showModal,setShowModal] = useState(false)
    const date = new Date();

    return (
        <div className='w-[55%] h-screen border-r border-gray-200 p-10 flex flex-col gap-10 overflow-y-scroll'>
            {showModal && <AddCardForm setShowModal={setShowModal} />}
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-sm text-gray-400">{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
                </div>
                <div className='flex gap-3'>
                    <button className="btn btn-primary">
                        Update
                    </button>
                    <button className="btn text-xl">
                        <BiSolidBellRing/>
                    </button>
                </div>
            </div>
            <div className="bg-primary w-full p-8 rounded-lg text-base-100 flex justify-between">
                <div className="w-3/12">
                    <p className="text-sm text-gray-400">Total All Balance</p>
                    <h1 className="text-2xl font-semibold my-2">$26.270.80</h1>
                    <p className="text-sm text-gray-400">Total all of your card</p>
                </div>
                <div className="border border-gray-200 h-[100%] mx-2"></div>
                <div className="w-3/12">
                    <p className="text-sm text-gray-400">Deposit</p>
                    <h1 className="text-2xl font-semibold my-2">$8.070.10</h1>
                    <p className="text-sm text-gray-400">8% of your money</p>
                </div>
                <div className="border border-gray-200 h-[100%] mx-2"></div>
                <div className="w-3/12">
                    <p className="text-sm text-gray-400">Investment</p>
                    <h1 className="text-2xl font-semibold my-2">$9.021.20</h1>
                    <p className="text-sm text-gray-400">8% of your money</p>
                </div>
            </div>
            <MyCard setShowModal={setShowModal} />
        </div>
    );
}

export default Dashboard;