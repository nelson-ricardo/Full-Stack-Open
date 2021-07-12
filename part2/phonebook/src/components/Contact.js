import React from 'react';
import Person from './Person';

const Contact = (props) => {

    return (
        <Person key={props.key} name={props.name} number={props.number}/>
    )
}

export default Contact;