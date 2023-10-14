import React from 'react';
import Layout from "../components/Layout.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Transactions from "../components/Transactions.jsx";

function Home() {

    return (
        <Layout>
            <Dashboard/>
            <Transactions width={25}/>
        </Layout>
    );
}

export default Home;