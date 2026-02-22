// import LeftSide from './components/LeftSide'
// import RightSide from './components/RightSide'
// import Main from './components/Main'
// import Hook from './components/Hook'

import Navbar from './components/Navbar'
import Category from './pages/Category'
import About from './pages/About'
import Home from './pages/Home'
import Shoes from './pages/Shoes'
import Cloth from './pages/Cloth'
import Context from './pages/Context'
import Cards from './components/Cards'

import Authlist from './components/Authlist'
import CustomHook from './components/CustomHook'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Memoz from './components/Memoz'
import Refference from './components/Refference'

import {Routes, Route} from 'react-router-dom'
import GetAllStd from './backend/GetAllStd'
import NewStd from './backend/NewStd'
import UpdateStd from './backend/UpdateStd'

const App = () => {
  return (
    <>
    {/* <Authlist/> */}
    {/* <CustomHook/> */}
    {/* <Memoz/>
    <br /><br />
    <Refference/> */}
    
    <Routes>
      <Route path='/' element={<GetAllStd/>}/>
      <Route path='/create' element={<NewStd/>}/>
      <Route path='/edit/:id' element={<UpdateStd/>}/>

      {/* <Route path='/about' element={<About/>}/>
      <Route path='/category' element={<Category/>}>
        <Route path='shoes' element={<Shoes/>}/>
        <Route path='cloth' element={<Cloth/>}/>
      </Route> */}
    </Routes>
    </>
  )
}

export default App;