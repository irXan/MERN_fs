import React, { useMemo, useState } from 'react'

const Memoz = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [changeValue, setChangeValue] = useState(10);

    const inc=()=>{
        setCount(prev => prev + 10);
    };

    const total=useMemo(()=>{
        console.log("useMemo recalculated");
        return count + changeValue;
    }, [count, changeValue]);

  return (
    <>
      <h2>Count : {count}</h2>
      <h2>ChangeVal : {changeValue}</h2>
      <h2>M E M O : {total}</h2>
      <h2>Text : {text}</h2>

      <input type="text" placeholder='Enter Your Name' value={text} onChange={(e) => setText(e.target.value)}/>

      <div className='flex gap-5'>
        <button onClick={inc}>Inc.</button>
        <button onClick={() => setChangeValue(prev => prev + 10)}>Change-Val</button>
      </div>
    </>
  )
}

export default Memoz
