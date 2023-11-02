import React from 'react';
import Banner from '../Banner/Banner';
import DCSC from '../DCSC/DCSC';
import EventFest from '../EvenFest/EventFest';
import Gallery from '../Gallery/Gallery';
import Executive from '../Exicutive/Executive';
import NeedHelp from '../NeedHelp/NeedHelp';

const Home = () => {
    return (
        <div>
            <Banner ></Banner>
            <DCSC></DCSC>
            <EventFest></EventFest>
            <Gallery></Gallery>
            <Executive></Executive>
            <NeedHelp></NeedHelp>
        </div>
    );
};

export default Home;