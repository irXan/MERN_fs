import React from 'react'
import { FcStackOfPhotos } from "react-icons/fc";
import { IoPersonAdd } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";



const Main = () => {
  return (
  <>
    <div className='w-[60%]'>
      <div className="carousel carousel-center bg-slate-400 rounded-box w-[99%] h-[20%] space-x-4">
  <div className="carousel-item">
    <img
      src="https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRSpPogN3ZE6tdqHu3yMbMSSbDh-Bwi_b9A&s"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://i.ytimg.com/vi/ubFaqwn5y5c/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDTunstZ7l0xhIgW6J28Dy7DQepBw"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://pbs.twimg.com/media/E0vfpG0XMAE4GO7.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://i.pinimg.com/736x/29/92/b2/2992b29958d7b81b4afb124db90515c0.jpg"
      className="rounded-box" />
  </div>
</div>

<div className='bg-slate-200 w-[99%]'>
<div className='flex gap-5'>
  <img src="https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-[40px] h-[40px] rounded-full ml-2'/>
  <input type="text" placeholder="Whats on your mind, Josephine?" className="input input-bordered bg-slate-300 rounded-full"/>
</div>

  <div className="divider divider-neutral"></div>
  
<div className='flex gap-3'>

<div className='flex gap-2'>
  <FcStackOfPhotos size={20}/>
  <h1 style={{ color: "black" }}>Photo/Video</h1>
</div>
<div className='flex gap-2'>  
  <IoPersonAdd size={20} color="blue"/>
  <h1 style={{ color: "black" }}>Tag Friends</h1>
</div>
<div className='flex gap-2'>
  <MdEmojiEmotions size={20} color="yellow"/>
  <h1 style={{ color: "black" }}>Feeling/Activity</h1>
</div>

</div>

</div>
    </div>
    </>
  )
}

export default Main
