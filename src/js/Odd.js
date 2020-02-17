import React from 'react';

export default function Odd(props) {   

    if (props.state % 2 !== 0) {
        return <p>{props.state}</p>
    } else  return <p></p>
}