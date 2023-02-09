import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../topBar/TopBar';

const Main = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;