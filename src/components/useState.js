import React, { useState } from 'react'

function Hook() {
    // Syntax:
    // const [state, setState] = useState(default);
    
    const [color, setColor] = useState('green');

    const changeColor = () => {
        setColor('red');
    }

    return (
        <>
            <h5>This is color: {color}</h5>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Hook;