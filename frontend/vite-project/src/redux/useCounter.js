import React, { useEffect, useState } from 'react'
import axios from "axios"

export const useCounter = () => {
    const [count, setCount]=useState(0);
    const [data, setData]=useState(10);
    const [post, setPost]=useState([]);
    
    useEffect(()=>{
        setData(data+5)
    }, [count])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>setPost(res.data))
    }, [])

    const inc=()=>{
        setCount(count+10)
    }

  return {count,inc,data,post}
}
