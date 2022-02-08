import React from 'react';
import Announcement from '../components/HomeComponents/Announcement';
import Categories from '../components/HomeComponents/Categories';
import Products from '../components/HomeComponents/Products';
import Slider from '../components/HomeComponents/Slider';
import Navbar from '../components/Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    );
};

export default Home;