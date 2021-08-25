import React  from 'react';
import cont from './cont/cont.mp4'

const  ContactUs=()=> {

    return (
        <div className="Contact" style={{display:'flex'}}>
                                   
              <>
                <div className="container" style={{display: 'flex'}} >
                    
                       
                                
                <video className="video" style={{marginTop:'50px'}} width="600px" height="400px"  autoPlay loop muted>
                    <source src ={cont} type='video/mp4'/>
                    </video> 
                             <p><h2  className="our2" style={{display:'flex',justifyContent:'center' }}>Contact Us</h2>Do you have a question about an order, a sold-out item, or something else? Then take a look at our FAQ.

Can’t find your question among them? Be sure to leave us a message at our email address, the live chat, our social media channels or WhatsApp. Our customer service is ready to help you on working days from 9.00 a.m. to 9.00 p.m. 
Telephone number  +31 (0)73-2032732

We can be reached by telephone on working days from 9.00 a.m. to 5.00 p.m.
*This number is only meant for questions directed towards our customer service .

Other adress information

Scin Care
Processing of gemstones and manufacture of jewelry, etc. (no imitation)
Internet retail trade in other non-food

KvK number: 65961137
BTW number: +4567899876545678

 </p>
                      
                            </div>

                                   
                            <div>

                           
                
                </div>
              </>  
            </div>
        )
    
}


export default  ContactUs;
