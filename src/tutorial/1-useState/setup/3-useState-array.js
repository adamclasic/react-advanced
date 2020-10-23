import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const clickHandler = () => {
    setPeopol([])
    console.log('this is a click hander of clear all')
  }
  const deleteItem = (id) => {
    console.log('this is a delete Items')

    const newPeopol = peopol.filter((person) => {
      return person.id !== id;
    })
    setPeopol(newPeopol)
  }
  const [peopol, setPeopol] = React.useState(data)
  return <>
  {peopol.map((person)=>{
    const {id, name} = person
    return <div className='item'>
      <h4  key={id}>{name}</h4>
      <button onClick={() => deleteItem(id)}>remove</button>
    </div>
  })}
  <button className='btn' onClick={clickHandler}>clear items</button>
  </>
};

export default UseStateArray;
