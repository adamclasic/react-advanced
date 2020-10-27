import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator
const ShortCircuit = () => {
  const [isError, setIsError] = useState(false)
  const [px, setPx] = useState(0)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const toggle = () => {
    window.addEventListener('resize', setPx(window.wid))
  }
  
  return <>
<h1>{'' || 'no 5'}</h1>
{isError && <h1>error..</h1> }
<button onClick={toggle}>togle</button>
  </>;
};
const oneDiv = <div>
  <h3>hey there</h3>
</div>

export default ShortCircuit;
