import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${count} days`
  }, [count])
  const addNum = () => {
    setCount(count + 1)
  }
  
  return <>
  <h3>{count}</h3>
  <button className='btn' onClick={addNum}>click here</button>
  </>;
};

export default UseEffectBasics;
