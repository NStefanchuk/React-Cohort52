import React from 'react'

const Person = ({ person }) => {
  if (Boolean(person) === false) {
    return <h1>No data</h1>
  }
  return (
    <ul>
      <li>First name: {person.results[0].name.first}</li>
      <li>Last name: {person.results[0].name.last}</li>
      <li>Email: {person.results[0].email}</li>
    </ul>
  )
}

export default Person
