import React from 'react'

const Button = ({ setCount }) => {
  return (
    <button onClick={() => setCount((prevState) => prevState + 1)}>
      Add 1!
    </button>
  )
}

export default Button
