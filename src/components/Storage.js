import React, { useEffect, useState } from 'react'

const Storage = () => {
    const [name, setName] = useState(
        localStorage.getItem('username') ? localStorage.getItem('username') : ''
    );

    useEffect(() => {
        localStorage.setItem('username', name);
    }, [name]);

  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <h1>{name}</h1>
    </div>
  )
}

export default Storage
