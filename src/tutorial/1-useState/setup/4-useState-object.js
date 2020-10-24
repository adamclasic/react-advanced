import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  const clickHandler = () => {
    setPerson({...person , message: 'hello world'})
  }
  let {name, age, message} = person;
  return <>
  <h4>{name}</h4>
  <h4>{age}</h4>
  <h4>{message}</h4>
  <button className='btn' onClick={clickHandler}>change</button>
  </>;
};

export default UseStateObject;
