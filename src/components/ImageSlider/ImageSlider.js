import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'
import image8 from './imag/image8.jpeg'
import image9 from './imag/image9.jpg'
import image10 from './imag/image10.jpg'
import image11 from './imag/image11.jpg'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


function ImageSlider() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Grid>
            <div className='best' >Our bestsellers</div>
        <Slider autoplay style={{
            position: 'relative'
        }} {...settings}>
            
            <div className="card-wrapper">
            
               <div className="card"> 
                    <div className="card-image">
                        <img src={image8} />
                    </div>
                  
                    <div className="details">
                        <h2>Hand cream <span className="price">25$</span></h2>
                    </div>
                </div> 
            
            </div>
            
            <div className="card-wrapper">
                <div className="card"><Link to={`/detail/3`}>
                    <div className="card-image">
                        <img src={image9} />
                    </div>
                   
                    <div className="details">
                        <h2>Serum <span className="price">20$</span></h2>
                    </div></Link>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image"><Link to={'detail/2'}>
                        <img src={image10} /></Link>
                    </div>
                   
                    <div className="details">
                        <h2>Tonic<span className="price">30$</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card"><Link to={`/detail/1`}>
                    <div className="card-image">
                        <img src={image11} />
                    </div>
                    
                    <div className="details">
                        <h2>Hand Cream<span className="price">15$</span></h2>
                </div></Link>
                    </div>
            </div>
        </Slider>
        </Grid>
    )
}

export default ImageSlider
