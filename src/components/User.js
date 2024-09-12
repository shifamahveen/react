import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();

  return (
    <div>
        <h1>User Component</h1>
        <p> Displaying info of user : {id} </p>
    </div>
  )
}

export default User;