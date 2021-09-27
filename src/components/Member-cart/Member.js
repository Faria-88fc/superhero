import React from 'react';
import './Member.css'

const Member = (props) => {
    // console.log(props.member)
    const {img,name,role,position,takePerSession,experience}= props.member;
    return (
        <div className= 'member-container'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Role: {role}</h3>
            <h3>Position: {position}</h3>
            <h3>Experience: {experience}</h3>
            <h3>Fee Per Session: {takePerSession}</h3>
            <button>Add </button>
        </div>
    );
};

export default Member;