import React from 'react'
import { useState, useEffect } from 'react'
import Person from './Person'

const PersonController = () => {
  const [person, setPerson] = useState(null)

  const getPerson = async () => {
    try {
      const apiURL = 'https://www.randomuser.me/api?results=1'
      const response = await fetch(apiURL)
      const data = await response.json()
      setPerson(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPerson()
  }, [])
  return <Person person={person} />
}

export default PersonController
