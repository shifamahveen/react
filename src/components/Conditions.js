import React from 'react'

function Condition(props) {
    return (
        <>
        {props.isLoggedIn ?
        <button onClick={props.Logout}>Logout</button> :
        <button onClick={props.Login}>Login</button>
        }
        </>
    )
}

export default Condition;