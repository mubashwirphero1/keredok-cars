import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUS from './About US/AboutUS';
import HomeCars from './Cars/HomeCars';
import HomeReview from './Review/HomeReview';
import TopBanner from './Top Banner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <TopBanner />
            <AboutUS />
            <HomeCars />
            <HomeReview />
            <Footer />
        </div>
    );
};

export default Home;