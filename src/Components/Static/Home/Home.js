import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBanner from './Top Banner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <TopBanner />
            <Footer />
        </div>
    );
};

export default Home;