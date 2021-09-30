import React, { useEffect, useState } from 'react';
import Member from '../Member-cart/Member';
import './Members.css'

const Members = () => {
    const [ members, setmembers] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(()=>{
        fetch ('./tools.JSON')
        .then (res=> res.json())
        .then (data=> setmembers(data))
    },[])
    const addtoCart = (member)=>{
        console.log(member)
        const newCart = [...cart, member];
        setcart(newCart)
    }

    let Name = '';
    let total = 0;
    for (const member of cart){
        total = total +parseInt( member.takePerSession);
        Name = Name + member.name;
        
    }
    
    return (
        <div className='members'> 
            {
                members.map(member=> <Member key={member.id} member={member} addtoCart={addtoCart}></Member>)
            }

            <div className='cart'>
            <h3>member you added:{cart.length}</h3>
            <h3>Name of the member:</h3>
            <div>
            <h4>{Name}</h4>
            </div>
            <h3>Total Cost:{total}</h3>
            <button id='cart-btn'>Confirm</button>
            
        </div>
        </div>
    );
};

export default Members;