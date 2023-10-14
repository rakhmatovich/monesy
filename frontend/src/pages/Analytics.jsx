import React from 'react';
import Layout from "../components/Layout.jsx";
import {PieChart} from "../components/PieChart.jsx";

function Analytics() {
    return (
        <Layout>
            <div className='w-[55%] h-screen p-10 flex flex-col gap-10 overflow-y-scroll'>
                <h1 className="text-2xl font-bold">Analytics</h1>
                <PieChart title='May'/>
            </div>
        </Layout>
    );
}

export default Analytics;