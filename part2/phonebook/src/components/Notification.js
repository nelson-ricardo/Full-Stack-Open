import React from 'react';

const Notification = (props) => {

    if(props.error == null) {
        return null
    } else if(props.error === true) {
        return (
            <div className="error">
                {props.notification}
            </div>
        )
    } else if(props.error === false) {
        return (
            <div className="success">
                {props.notification}
            </div>
        )
    }
} 

export default Notification;