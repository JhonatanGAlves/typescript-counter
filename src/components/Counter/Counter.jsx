import React, { useState } from 'react'
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleChangeCountDown = () => {
    setCount(count - 1)
  }
  
  const handleChangeCountUp = () => {
    setCount(count + 1)
  }

  return (
    <div className="display">
      <span className="number">{count}</span>
      <div>
        <button className="btn" onClick={handleChangeCountDown}>-</button>
        <button className="btn" onClick={handleChangeCountUp}>+</button>
      </div>
    </div>
  )
}