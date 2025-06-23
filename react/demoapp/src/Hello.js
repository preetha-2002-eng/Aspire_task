import React from 'react';

function Hello(props){
    return(
        <div>Hello User! Welcome to React
            <h1>Hi! This a user named {props.username} and your password is {props.password}</h1>
        </div>
    )
}

export default Hello;