import React from 'react'

const RightSide = () => {
  const Contacts = [
          {
              title: "Joseph Williams",
              icon: <img src="https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-[35px] h-[35px] rounded-full'/>,
          },
          {
              title: "Jessica",
              icon:  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOfv1543QS1cF3kFJTNRfBhKVWw8yoOdaKA&s" alt="" className='w-[35px] h-[35px] rounded-full'/>,
          },
          {
              title: "Eric Jones",
              icon:  <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-[35px] h-[35px] rounded-full'/>,
          },
          {
              title: "Suzie",
              icon:  <img src="https://photodpshare.com/wp-content/uploads/2025/09/profile-picture-girls-download-free-780x1024.webp" alt="" className='w-[35px] h-[35px] rounded-full'/>,
          },
          {
              title: "Antonio",
              icon:  <img src="https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-[35px] h-[35px] rounded-full'/>,
          },
      ]
  return (
<>
<div className='w-[20%]'>

  <div>
        <h2>Sponserd</h2>
  
          <div className="flex text-black gap-2">
              <h2> <img src="https://png.pngtree.com/png-clipart/20250703/original/pngtree-pizza-logo-transparent-image-free-for-online-download-png-image_21265162.png" alt="" className='w-[35px] h-[35px] rounded-full'/> </h2>
              <h2>Lebo's Pizza</h2>
          </div>

        <p>Experience the trendy pizza spot in Palo Alto being called the next big thing.</p>

    </div>

  <div className="divider  divider-neutral"></div>

    <div>
        <h2>Birthdays</h2>
          <div className="flex text-black gap-2">
              <h2> <img src="https://static.vecteezy.com/system/resources/previews/031/589/649/non_2x/gift-box-cartoon-present-box-cartoon-gift-box-wrapped-in-green-paper-with-ribbon-flat-in-cartoon-style-isolated-on-white-background-vector.jpg" alt="" className='w-[35px] h-[35px] rounded-full'/> </h2>
              <p>Jessica, Eric & 2 others have birthdays today</p>
          </div>
    </div>

  <div className="divider  divider-neutral"></div>

  <div>

    <div className="navbar bg-slate-400">
  <div className="flex-1">
    <a className="text-xl">Contacts</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
  
</div>
        {
            Contacts.map((z)=>{
                return(
                    <div className='flex text-black gap-3' key={z}>
                        <h1>{z.icon}</h1>
                        <h1>{z.title}</h1>
                    </div>
                )
            })
        }
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1 bg-slate-500">See More ⬇️</div>
    </div>

    </div>

</div>
</>
  )
}

export default RightSide
