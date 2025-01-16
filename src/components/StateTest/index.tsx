import { type RootState } from '@/store/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function StateTest() {
  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <div>
      <span>{count}</span>
    </div>
  )
}