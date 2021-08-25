import './Home.css';
import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import HeroSlider from '../Slide/HeroSlider';
import video from './video/video.mp4'
import { productContext } from '../../contexts/ProductsContext';
import Header from '../Slide/Header';
import Info from '../Info/Info';
import Slider from '../ImageSlider/ImageSlider';
import InfoPage2 from '../info2/InfoPage2';
import InfoPage3 from '../InfoPage3/InfoPage3'
const Home = () => {
    
    return (
        <>
        <div>
            <Grid>
                
                <Header />  
                <HeroSlider />
                <Info/>
                <InfoPage3/>
                
                <Slider/>

                <video className="video" width="100%" height="700px"  autoPlay loop muted>
                    <source src ={video} type='video/mp4'/>
                    </video> 

                 <InfoPage2/>   
            </Grid>
        </div>
        </>
    );
};
export default Home;