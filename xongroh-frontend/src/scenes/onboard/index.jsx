import React, { useState, useEffect } from 'react'
import Onboard from './Onboard'
const envType = import.meta.env.VITE_ENVTYPE

const OnboardPage = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')
  const unsplash =
    'https://api.unsplash.com/photos/random/?client_id=XPPWxHD5JMiw0Eq6DqlacVopjtvThQ2jaZbwEspvMwM'

  useEffect(() => {
    if (envType === 'development') {
      setBackgroundImageUrl('')
    } else {
      fetch(unsplash)
        .then((response) => response.json())
        .then((jsonData) => {
          setBackgroundImageUrl(jsonData.urls.regular)
        })
        .catch((error) => {
          console.log(error)
          window.alert('API rate limit exceeded.')
        })
    }
  }, [])

  return <Onboard backgroundImageUrl={backgroundImageUrl} />
}

export default OnboardPage
