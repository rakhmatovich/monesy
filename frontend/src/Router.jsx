import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home.jsx";
import BaseContextWrapper from "./components/common/BaseContext.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";
import Policy from "./pages/Policy.jsx";
import Registration from "./pages/Registration.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";

function Router() {
    return (
        <BaseContextWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/policy" element={<Policy/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/transactions" element={<TransactionsPage/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </BaseContextWrapper>
    );
}

export default Router;