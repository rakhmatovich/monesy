import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import BaseContextWrapper from "./components/common/BaseContext.jsx";
import Analytics from "./pages/Analytics.jsx";
import Calendar from "./pages/Calendar.jsx";
import Settings from "./pages/Settings.jsx";
import Policy from "./pages/Policy.jsx";
import Registration from "./pages/Registration.jsx";
import {ToastContainer} from "react-toastify";

function Router() {
    return (
        <BaseContextWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/policy" element={<Policy />}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
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