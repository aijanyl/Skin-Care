import { Grid } from '@material-ui/core';
import React from 'react';
import inf3 from './infoim/inf3.jpg';
import info3 from './infoim/info3.mp4'
const InfoPage3 = () => {
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
                
                  <video style={{objectFit: 'fill'}} className="video3" width="450px" height="700px" autoPlay loop muted>
                  <source src={info3} type="video/mp4"/></video>
</figure></a>
</div>
                </div>
                <div className="col col-xs-12 col-md-6 highlight-block__border">
                  <div className="highlight-block__content"><div className="highlight-block__header">

            <div><h1 className="h1 highlight-block__title" style={{color:"pink"}}> Also this perfect Hand Cream</h1><p className="content-text content-text--md highlight-block__subtitle">“Since using this hydrating formula, I’ve noticed my cuticles to be smoother and the skin around is also stronger/more taut,” writes one five-star reviewer, while another says, “My cuticles and fingernails look better after this cream than they do with the oil I use for manicures.” And though many call it a miracle for cuticles, nearly 20 percent of reviewers also think this cream works well to moisturize the rest of their hands. “My hands are as smooth as a baby’s butt,” writes one reviewer. “I love that is goes on creamy and then it’s gone, leaving my hands and cuticles soft and smelling yummy,” another says, referencing the praised coconut scent. One goes as far as comparing this to our top-rated pick: “Frankly, I rate it up right up there with , or better, with the bonus points for the awesome smell.”

</p>
            </div>

            
</div><div className="highlight-block__text"><div className="content-text content-text--sm highlight-block__richtext"></div></div>
</div>
                </div>
              </div>
            </div></div><div className="col col-xs-12 col-lg-4">
            <img src={inf3} width="450px" height="700px"/>
              
            <div className="row row--gutter align-items-flex-start"><div className="highlight-block highlight-block--ingredients col col-xs-12">

</div>
</div>
            </div>
          </div>
          </Grid>
    );
};

export default InfoPage3;