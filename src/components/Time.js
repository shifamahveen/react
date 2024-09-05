import React, { useState, useEffect } from 'react'

function Time() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(prev => prev+1)
        }, 1000);  

        return () => clearInterval(interval);
    },[isRunning]);

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => setIsRunning(true)}>Start Timer</button>
            <button onClick={() => setIsRunning(false)}>Stop Timer</button>
        </>
    )
}

export default Time;