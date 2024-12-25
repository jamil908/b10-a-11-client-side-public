import React from 'react';
import Slider from './Slider';
import AllQuery from '../allQuery/AllQuery';
import ExtraSection from '../extra/ExtraSection';
import '../shared/nav.css'
import HighlightSection from './HilightSection';
const Home = () => {
    return (
        <div className='bg-c'>
            
            <Slider></Slider>
            <AllQuery></AllQuery>
            <HighlightSection></HighlightSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;
