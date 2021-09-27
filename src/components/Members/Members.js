import React, { useEffect, useState } from 'react';
import Member from '../Member-cart/Member';
import './Members.css'

const Members = () => {
    const [ members, setmembers] = useState([])
    useEffect(()=>{
        fetch ('./tools.JSON')
        .then (res=> res.json())
        .then (data=> setmembers(data))
    },[])
    return (
        <div className='members'>
            {
                members.map(member=> <Member key={member.id} member={member}></Member>)
            }
            
        </div>
    );
};

export default Members;