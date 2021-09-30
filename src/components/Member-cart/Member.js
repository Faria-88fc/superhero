import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Member.css'

const Member = (props) => {
    // console.log(props)
    const {img,name,role,position,takePerSession,experience}= props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className= 'member-container'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Role: {role}</h3>
            <h3>Position: {position}</h3>
            <h3>Experience: {experience}</h3>
            <h3>Fee Per Session: {takePerSession}</h3>
            <button onClick = {() => props.addtoCart (props.member)}>{element} Add </button>
        </div>
    );
};

export default Member;