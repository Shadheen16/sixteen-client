import React from 'react';
import Announcement from '../components/HomeComponents/Announcement';
import Slider from '../components/HomeComponents/Slider';
import Navbar from '../components/Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    );
};

export default Home;