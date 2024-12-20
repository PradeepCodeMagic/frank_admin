
import { Outlet } from 'react-router-dom'
import LeftSide from './LeftSide'
import Header from './Comman/Header'
import { useContext } from 'react'
import { adminContext } from './Context/Context'


export default function Layout() {
  let {navVisible}=useContext(adminContext)
  return (
    <div className={navVisible==false ? "grid grid-cols-[20%_auto] duration-[0.5s] " : "grid grid-cols-[6%_auto] duration-[0.5s]"} >
      <div className=' '> <LeftSide /> </div>
      <div className='HeightFixed '>
      <Header/> 
      <Outlet  />
       </div>
    </div>
  )
}
