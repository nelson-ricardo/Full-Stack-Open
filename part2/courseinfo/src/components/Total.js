import React from 'react';

const Total = (props) => {
    
    const total = props.parts.reduce((sum, part) => sum += part.exercises,0);

    return (
        <p>The total amount of exercises is: {total}</p>
    )
}

export default Total;