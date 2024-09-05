import React, {useState} from 'react'

function Multiple() {
    const [person, setPerson] = useState({
        fname: "Smith",
        age: 27,
        country: 'USA'
    });

    const changeState = () => {
        setPerson((prev) => {
            return  {
                ...prev,
                fname: "alex",
            }
        });
    }

    return (
        <>
            <h2>This is {person.fname}, he is {person.age} yrs of age and from {person.country}</h2>
            <button onClick={changeState}>Change State</button>
        </>
    )
}

export default Multiple;