import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({course}) => {
    const {title, parts} = course;

    return (
        <div>
            <Header text={title}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

export default Course;