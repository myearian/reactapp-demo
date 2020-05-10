import React, { Component } from 'react';

import './card.styles.css';

export const Card = (props) => {
    return <div className='card-container' >
        <h1>{props.cardObject.name}</h1>
        <h3>{props.cardObject.username}</h3>
        <h3>{props.cardObject.email}</h3>
    </div>;
};