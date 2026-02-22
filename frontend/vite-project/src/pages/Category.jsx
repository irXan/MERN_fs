import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Category = () => {
  return (
    <div>
      <h2 className='bg-gray-500 text-white justify-centre'>CATEGORY</h2>

      <ul>
        <li><Link to='shoes'>SHOES</Link></li>
        <li><Link to='cloth'>CLOTH</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Category
