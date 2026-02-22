import React from 'react'
import { useCounter } from '../redux/useCounter'

const CustomHook = () => {
    const {count,inc,data,post} = useCounter();
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h3>customHook: {count}</h3>
      <button onClick={inc}>Add.</button>
      <h3>dataVal = {data}</h3>

      <div>
        {
            post.map((y)=>(
                <div key={y}>
                    <h2>name: {y.name}</h2>
                    <h2>email: {y.email}</h2>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CustomHook
