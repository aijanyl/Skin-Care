import { Grid } from '@material-ui/core';
import React from 'react';
import img from './img/img.jpg';
import video2 from './video2/video2.mp4'
import "./Info.css"

const Info = () => {
    return (
        <Grid style={{
            marginTop: '30px'
        }}>
<div style={{
    display: 'flex-wrap',
    
}} className="row1 row row--gutter align-items-flex-start">
        <div className="col col-xs-12 col-lg"><div className="highlight-block highlight-block--product" data-datalayer-listview="">
              <div className="row row--gutter align-items-center">
                <div className="col col-xs-12 col-md-6">
                  <div className="highlight-block__media"><a href="/products/leave-in-conditioner"><figure className="img img--cover img--4x3 ">
                  <img src={img} width="450px" height="700px"/>
</figure></a>
</div>
                </div>
                <div className="col col-xs-12 col-md-6 highlight-block__border">
                  <div className="highlight-block__content"><div className="highlight-block__header">

            <div><h1 className="h1 highlight-block__title" style={{color:"pink"}}> You need to try this</h1><h2 className="h2 highlight-block__title" style={{color:"pink"}}>MILK TONIC</h2><p className="content-text content-text--md highlight-block__subtitle">Our gentle, alcohol-free Vanilla Milk Tonic helps balance your skin and preps for the next moisture step. Formulated with moisturising Glycerine, Squalene, Apple Extract, and Avocado Oil, this skin-perfecting toner helps smooth and improve the appearance of pores.Skin-loving ingredients:Squalene and Sodium Hyaluronate: moisturising agents helping maintain the skin’s moisture. Apple Fruit Extract: a botanical extract to help improve the look of the skin. Avocado Oil: an emollient the helps condition and soften the skin.Vegan, Alcohol-free, Lightly Fragranced, Dermatologist-tested</p>
            </div>

            
</div><div className="highlight-block__text"><div className="content-text content-text--sm highlight-block__richtext"></div></div>
</div>
                </div>
              </div>
            </div></div><div className="col col-xs-12 col-lg-4">

              <video style={{objectFit: 'fill'}} className="video2" width="464px" height="700px" autoPlay loop muted>
                  <source src={video2} type="video/mp4"/>
              </video>
            <div className="row row--gutter align-items-flex-start"><div className="highlight-block highlight-block--ingredients col col-xs-12">

</div>
</div>
            </div>
          </div>
          </Grid>
    );
};

export default Info;