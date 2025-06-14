import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...'
  return (
    <div>
      <Count count={count} />
      <h2>{feedback}</h2>
      <Button setCount={setCount} />
    </div>
  )
}

export default Counter
