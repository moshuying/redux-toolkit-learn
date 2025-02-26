import React from 'react'
import type { RootState } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../store/counter/counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}