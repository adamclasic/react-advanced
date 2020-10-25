import React, { useState, useEffect } from 'react';

const UseEffectFetchData = () => {
  const url = 'https://api.github.com/users';
  const [users, setUsers] = useState([])
  const as = async() => {
    const ks = await fetch(url)
    const ksa = await ks.json()

    console.log(ksa);
    setUsers(ksa)
  }
  console.log(users);
  
  useEffect(() => {
    as()
    console.log('useeffect called');
  }, [])
  return <>
  <h3>Github Users</h3>
  <ul className='users'>
  {users.map( (user) => {
    return <li key={user.id}>
      <img src={user.avatar_url} alt="avatar"/>
      <h5>{user.login}</h5>
    </li>
  } )}
  </ul>
  </>;
};
export default UseEffectFetchData;
