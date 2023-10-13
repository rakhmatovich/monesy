import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import BaseContextWrapper from "./components/common/BaseContext.jsx";
import Analytics from "./pages/Analytics.jsx";
import Calendar from "./pages/Calendar.jsx";
import Settings from "./pages/Settings.jsx";

function Router() {
    return (
        <BaseContextWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
        </BaseContextWrapper>
    );
}

export default Router;