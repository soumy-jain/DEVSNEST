import React from 'react'

export default function Data(props) {
    return (
        <div className = 'data'>
            <h2>{props.text}</h2>
            <p>You have consumed: {props.cal} calories</p>
        </div>
    )
}
