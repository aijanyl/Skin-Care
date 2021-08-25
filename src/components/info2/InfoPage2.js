import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import girl1 from '../ImageSlider/imag/girl1.jpeg'
import girl2 from '../ImageSlider/imag/girl2.jpeg'
import girl3 from '../ImageSlider/imag/girl3.jpeg'
import ReadMoreModal from '../Read more/ReadMoreModal';
import './InfoPage2.css'

const InfoPage2 = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
            
            <Grid>
                <div className="our1" style={{textAlign:'center'}} ><h1 className ="h1 highlight-block__title" style={{color:"pink"}}>Meet our beauty Advisors</h1></div>
                <  div className="our">
            
                    <div className="card-image">
                        <img className="pic" src={girl1} />
                        <h6 className="our3" style={{textAlign:'center'}}>Maxime</h6>
                        <p color="pink">"Hi all. My name is Maxime , and i am a Beauty Advisor"</p>
                        <button onClick={handleOpen} className="more" style={{ backgroundColor :"pink" , color:'white' , borderRadius:"5px" , borderColor:'white' , display:'flex' , alignItems:'center' , marginLeft:"180px" , marginBottom:"40px"}} >Read more</button>
                    </div>
                  
        
                    <div className="card-image">
                        <img  className="pic" src={girl2} />
                        <h6 className="our3" style={{textAlign:'center'}}>Shae</h6>
                        <p color="pink" >"Hi all. I am a Canadian girl.  And i am a Beauty Advisor"</p>
                        <button onClick={handleOpen} className="more" style={{ backgroundColor :"pink" , color:'white' , borderRadius:"5px" , borderColor:'white' , display:'flex' , alignItems:'center' , marginLeft:"180px" , marginBottom:"40px"}} >Read more</button>
                    </div>
                   
                   
            
            
                    <div className="card-image">
                        <img className="pic" src={girl3} />
                        <h6 className="our3" style={{textAlign:'center'}}>Tjinjara</h6>
                        <p color="pink"> "Hi there. I am a huge beauty lover . I can help you with your choice"</p>
                        <button onClick={handleOpen} className="more" style={{ backgroundColor :"pink" , color:'white' , borderRadius:"5px" , borderColor:'white' , display:'flex' , alignItems:'center' , marginLeft:"180px" , marginBottom:"40px"}} >Read more</button>
                    </div>
                    </div>

                    
 </Grid>
<ReadMoreModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
 </>

        
    );
}

export default InfoPage2;