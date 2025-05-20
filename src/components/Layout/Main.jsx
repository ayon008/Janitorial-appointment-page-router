import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Main = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Main;