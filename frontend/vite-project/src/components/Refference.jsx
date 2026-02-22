import { useState, useRef, useEffect } from 'react'

const Refference = () => {
    const [count, setCount] = useState(0);
    const countValue = useRef(0);

    useEffect(()=>{
        countValue.current = countValue.current + 10
    }, [count])

  return (
    <>
      <h2>{countValue.current}</h2>
      <input type="text" placeholder='Type...' value={count} onChange={(e)=>setCount(e.target.value)}/>
    </>
  )
}

export default Refference
