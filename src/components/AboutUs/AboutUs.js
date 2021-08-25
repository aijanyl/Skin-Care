import React from 'react'
import about from './we/about.mp4'
import we2 from './we/we2.jpeg'
import './Aboutus.css'
const  AboutUs =()=> {

    return (
        <div>
              <><div>
                    <h2  className="our2" style={{display:'flex',justifyContent:'center' }}>About Us</h2>

              </div>
                <div className="container-e">
                    
                      
                    <video className="video" width="50%" height="400px"  autoPlay loop muted>
                    <source src ={about} type='video/mp4'/>
                    </video> 
                                <img width="50%" height="400" src={we2} alt="we"/>
                            </div>
                                
                                   <p >
Skins Cosmetics is the place to be for exceptional beauty products and refined perfumes. Since 2000, Skins Cosmetics has been introducing unique brands from all over the world, all with a special story and created by passionate founders. With these discoveries, Skins Cosmetics surprises and inspires its customers, combining the best service and advice from employees with a lot of knowledge and passion for the profession.

History and concept
Skins Cosmetics brought about a true revolution in Dutch cosmetics in 2000. It was the very first store in the Netherlands where only niche brands were sold that were not previously available in the Netherlands. The founders of Skins Cosmetics had a clear vision: we are looking for the perfume, make-up and skincare brands that are still undiscovered in the Netherlands, but already have an iconic status abroad. Not only the brands, but also the store design and service distinguish Skins from other cosmetic stores. The people who work at Skins are passionate about their profession, proud of the beautiful brands and are happy to share this with their customers. Sampling is inevitably linked to this. Customers are always invited and encouraged to take samples home, to experience the difference with other products or to see if the scent really suits them. There is no pressure to buy right away.

The long term counts at Skins Cosmetics: building a bond and showing what else exists in the world of perfume and cosmetics. We want people to be happy with their purchase and the personalized, independent advice that is provided. This has already resulted in various awards since opening, like the prestigious annual retail award for service and innovation and the award 'Amsterdam Entrepreneur of the Year'.

Skins Cosmetics is an official reseller of all brands that are sold in the Skins stores and on skins.nl. This means that we purchase directly from the brands and thus guarantee that we deliver authentic quality products in a completely legal manner.

Official retail prices
On the internet, however, the same products can often be found at lower prices in the so-called "gray trade". These companies offer products at cost price because they often do not (fully) operate legally, offer products that are counterfeit or because the products have reached the expiration date. As an official reseller, Skins Cosmetics uses the recommended prices that are set from the brands and is always able to offer authentic quality products.</p>

                            <div>

                           
                </div>
              </>  
            </div>
        )
    
}


export default  AboutUs;