import React, { useState } from 'react';

const UseStateCounter = () => {
  const btnEncrease = () => {
    setValue(value+1)
  }
  const btnEncreaseLater = () => {
    setTimeout(() => {
      setValue((prevVal)=>{
        return prevVal+1;
      })
    }, 2000)
  }
  const btndecrease = () => {
    setValue(value-1)
  }
  const btnRst = () => {
    setValue(0)
  }
  const [value, setValue] = useState(0)
  return <>
  <h3>counter</h3>
  <h2>{value}</h2>
  <button className='btn' onClick={btndecrease}>decreaese</button>
  <button className='btn' onClick={btnRst}>rest</button>
  <button className='btn' onClick={btnEncrease}>increase</button>
  <button className='btn' onClick={btnEncreaseLater}>increase Later</button>
  </>;
};

export default UseStateCounter;
