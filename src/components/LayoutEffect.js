import React, { useEffect, useLayoutEffect } from 'react'

// execution flow -> useLayoutEffect -> jsx(DOM) -> useEffect
const LayoutEffect = () => {
    useEffect(() => {
        console.log("use Effect hook");
    }, []);

    useLayoutEffect(() => {
        console.log("Use layout Effect hook");
    }, []);
    
  return (
    <div>
      <h1>Component</h1>
    </div>
  )
}

export default LayoutEffect
