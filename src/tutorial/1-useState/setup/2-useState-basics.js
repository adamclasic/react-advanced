import React, { useState } from 'react';

const UseStateBasics = () => {
  // let text = 'Random title'
  let [text, setText] = useState('Random title');
  const clickHandler = () => {
    (text == 'Random title') ? setText('Hello world') : setText('Random title');
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={clickHandler}>Change Title</button>
  </React.Fragment>;
};

export default UseStateBasics;
