import { increment } from "../redux/userSlice"
import { decrement } from "../redux/userSlice"
import { useSelector, useDispatch } from "react-redux";

const Context = () => {
    const context = useSelector((i)=>i.user.value);
    const dispatch = useDispatch();
  return (
   <>
    <div>REDUX TOOLKIT</div>

    <button onClick={()=>dispatch(increment())} className="bg-green-400 py-2 px-4 rounded-full"> + </button>
    <span>{context}</span>
    <button onClick={()=>dispatch(decrement())} className="bg-red-400 py-2 px-4 rounded-full"> - </button>
   </>
  )
}

export default Context
