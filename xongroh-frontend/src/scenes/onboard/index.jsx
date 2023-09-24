import React, { useState, useEffect } from 'react'
import Onboard from './Onboard'
const envType = import.meta.env.VITE_ENVTYPE
const unsplash = import.meta.env.VITE_UNSPLASH

const OnboardPage = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('')

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
