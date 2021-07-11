import React from 'react';
import Header from './Header';
import Content from './Content';


const Course = ({course}) => {
    const {title, parts} = course;

    return (
        <div>
            <Header text={title}/>
            <Content parts={parts}/>
        </div>
    )
}

export default Course;