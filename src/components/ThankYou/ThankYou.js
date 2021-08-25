import React from 'react';
import thanks from './image4/thanks.jpg'
const ThankYou = () => {
    return (
        <div className="thanks">
            <div>
            <h1>Thank You !</h1>
            <p>Thank you for making your first purchase with Skin Care! We’re so glad that you found what you were looking for.</p>
            <img src={thanks} width="600px" height="400px" />
            
            </div>
        </div>
    );
};

export default ThankYou;