import React, { useState, useEffect } from 'react'

function Count() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('blue');

    // guaranteed to execute atleast once
    useEffect(() => {
        console.log("component mounted")
    }, [count, color]);

    return (
        <div className="btn-group" >
            <button type="button" className="btn btn-primary"
            onClick={() => setCount(count - 1)}
            >-</button>
            <button type="button" className="bg-white border-0">{count}</button>
            <button type="button" className="btn btn-primary"
            onClick={() => setCount(count + 1)}
            >+</button>
            <h1>{color}</h1>
            <button onClick={()=> setColor('green')}>change color</button>
        </div>
    )
}

export default Count;