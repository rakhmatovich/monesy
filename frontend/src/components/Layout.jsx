import React from 'react';
import SideBar from "./SideBar.jsx";

function Layout({children}) {
    return (
        <div className='flex'>
            <SideBar/>
            {children}
        </div>
    );
}

export default Layout;