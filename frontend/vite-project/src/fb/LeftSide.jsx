import { MdOndemandVideo } from "react-icons/md";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const LeftSide = () => {
  const Profile = [
        {
            title: "Watch",
            icon: <MdOndemandVideo size={20} color="blue"/>,
        },
        {
            title: "Events",
            icon: <BsCalendar2HeartFill size={20} color="red"/>,
        },
        {
            title: "Friends",
            icon: <FaUserFriends size={20} color="Lightgreen"/>,
        },
        {
            title: "Memories",
            icon: <FaClockRotateLeft size={20} color="white"/>,
        },
    ]

  const Shortcuts = [
        {
            title: "Undiscovered Eats",
            icon: <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaUe-0wpJiG7OjK1SbmbRaY4Cy471floEWg&s" alt="Undiscovered Eats" className='w-[35px] h-[35px]'/>,
        },
        {
            title: "Weekend Trips",
            icon: <img src= "https://www.tripsavvy.com/thmb/pT_ZAje6cYUx8w2b4nsCk3FrxRU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/car-traveling-along-winding-road--maui--hawaii--america--usa-737142515-9d7096b173654472968075d805273c8f.jpg"  alt="Weekend Trips" className='w-[35px] h-[35px]'/>,
        },
        {
            title: "Jasper's Market",
            icon: <img src= "https://img.freepik.com/premium-vector/organic-food-market-street-food-market-stalls-with-fruits-vegetables-vector-cartoon_273525-490.jpg?semt=ais_hybrid&w=740&q=80" alt="Jasper's Market" className='w-[35px] h-[35px]'/>,
        },
        {
            title: "Red Table Talk Group",
            icon: <img src= "https://img.freepik.com/free-photo/hands-holding-gift-christmas-holiday-celebration-red-table_53876-41669.jpg" alt="Red Table Talk Group" className='w-[35px] h-[35px]'/>,
        },
        {
            title: "Best Hidden Hiking Trails",
            icon: <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4g3mXSiwEYmCOcYNVNnmx_At4ZyDAD_MVxw&s" alt="Best Hidden Hiking Trails" className='w-[35px] h-[35px]'/>,
        },
    ]

  return (
    <>
    <div className='w-[20%]'>
    <div>
        
        <div className="flex text-black gap-3">
            <h2><img src="https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-[35px] h-[35px] rounded-full'/></h2>
            <h2>Joseph Will</h2>
        </div>

        {
            Profile.map((x)=>{
                return(
                    <div className='flex text-black gap-3' key={x}>
                        <h1>{x.icon}</h1>
                        <h1>{x.title}</h1>
                    </div>
                )
            })
        }
    </div>

    <div className="dropdown dropdown-bottom max-w">
      <div tabIndex={0} role="button" className="btn m-1 bg-slate-500">See More ⬇️</div>
    </div>

  <div className="divider  divider-neutral"></div>

  <div>

    <div className="navbar bg-slate-400">
  <div className="flex-1">
    <a className="text-xl text-black"><b>ShortCuts</b></a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>

</div>
       <div>
        {
            Shortcuts.map((y)=>{
                return(
                    <div className='flex text-black gap-3' key={y}>
                        <h2>{y.icon}</h2>
                        <h2>{y.title}</h2>
                    </div>
                )
            })
        }
    </div>

    <div className="dropdown dropdown-bottom max-w">
      <div tabIndex={0} role="button" className="btn m-1 bg-slate-500">See More ⬇️</div>
    </div>

    </div>
    </div>
</>
  )
}

export default LeftSide
