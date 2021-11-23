import React, { useState } from 'react'
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleChangeCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="display">
      <span className="number">{count}</span>
      <button className="btn" onClick={handleChangeCount}>+1</button>
    </div>
  )
}