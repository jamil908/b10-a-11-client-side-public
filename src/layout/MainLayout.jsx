import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../page/shared/NavBar';
import Footer from '../page/shared/Footer';

const MainLayout = () => {
    return (
        <div className=' max-w-7xl mx-auto min-h-svh'>
        <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;