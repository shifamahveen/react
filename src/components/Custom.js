import React, { useEffect, useState } from 'react'

const Custom = (key, initialValue) => {
    const [value, setValue] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
    );

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default Custom;