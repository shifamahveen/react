import React from 'react'

const Callback = () => {

  console.log('Component re rendered');

  return (
    <div>
      <h1>Callback hook</h1>
    </div>
  )
}

export default React.memo(Callback);