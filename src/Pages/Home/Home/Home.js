import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Introduction></Introduction>
            <Experts></Experts>
        </div>
    );
};

export default Home;