import { MdOndemandVideo } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-slate-100">
  <div className="flex-1">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 h-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.freepik.com/premium-vector/facebook-logo-vector-facebook-official-logo-vector-facebook-logo-illustrator_1002350-1803.jpg?semt=ais_hybrid&w=740&q=80" />
        </div>
    </div>
  </div>

<div className="flex gap-7">
      <Link to='/'><MdOndemandVideo size={20} color="yellow"/></Link>
      <Link to='/about'><IoMdHome size={20} color="yellow"/></Link>
      <Link to='/category'><CiShop size={20} color="yellow"/></Link>
</div>

</div>
  )
}

export default Navbar
