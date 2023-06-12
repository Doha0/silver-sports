import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClass from '../PopularClass/PopularClass';
import OurAthelets from '../OurAthelets/OurAthelets';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <OurAthelets></OurAthelets>
        </div>
    );
};

export default Home;