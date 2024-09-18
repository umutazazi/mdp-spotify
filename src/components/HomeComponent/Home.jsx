import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Sidebar from '../SideBar/Sidebar';
import '../HomeComponent/Home.css';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="page-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;