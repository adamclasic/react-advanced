import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
const ControlledInputs = () => {
  const [data, setData] = useState('')
  const [people, setPeople] = useState([])
const handleSubmit = (e) => {
  e.preventDefault()
  // setData(e.target.value)

  // people.push(document.getElementById('data').value)
  setPeople((people) => {
    return [...people, document.getElementById('data').value]
  })
  setData(document.getElementById('data').value)
  // console.log(document.getElementById('data').value);
}


const addperson = (person) => {
}


  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='data'>Name : </label>
            <input
              type='text'
              id='data'
              name='data'
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} type='submit'>add data</button>
          <h1>{data}</h1>
          {people.map((person, index) => {
          return (
            <div className='item' key={index}>
              <h4>{person}</h4>
            </div>
          );
        })}
        {/* {console.log(people)} */}
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
