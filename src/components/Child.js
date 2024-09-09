import React, { useContext } from 'react';
import { GlobalVar } from '../App';

const Child = () => {
    const passedVal = useContext(GlobalVar);
    console.log(passedVal);
    return (
        <>
            <h1>Child Component</h1>
        </>
    );
}

export default Child;