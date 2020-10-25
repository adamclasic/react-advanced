import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/adamclasic';
const MultipleReturns = () => {

  const [name, setName] = useState('user name')

  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  const [imgUrl, setImgUrl] = useState('#')

  const [follwers, setFollwers] = useState(0)
  useEffect(() => {
    fetch(url)
    .then((res) => {
      if(res.status>400 && res.status<500) {
      setIsLoading(false)
      setIsError(true)
        console.log(res);
      }else {
      res.json()
      .then((res) => {
      setName(res.login)
      setFollwers(res.followers)
      setIsLoading(false)
      setImgUrl(res.acatar_url)
      console.log(res);
    })
  }
  })
    .catch((err) => {
      setIsError(true)
      setIsLoading(false)
      console.log(err);
    })
    
  }, [])

  if (isLoading) {
    return <h3>loading..</h3>
  }
  if (isError) {
    return <h3>something went wrong</h3>
  }
  return <>
  <h3>{name} {follwers}</h3>
  <img src={imgUrl} alt=""/>
  </>;
};

export default MultipleReturns;
