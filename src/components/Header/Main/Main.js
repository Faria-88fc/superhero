import React from 'react';
import Left from '../../Left-side/Left';
import Cart from '../../Right-section/Cart';

import './Main.css'

const Main = () => {
    return (
        <div className='main'>
           <Left></Left>
           <Cart></Cart> 
             
        </div>
    );
};

export default Main;