
import { Outlet } from 'react-router-dom'
import LeftSide from './LeftSide'
import Header from './Comman/Header'


export default function Layout() {
  
  return (
    <div className='flex ' >
      <div className=' bg-slate-400 '> <LeftSide /> </div>
      <div className='HeightFixed'>
      <Header/> 
      <Outlet  />
       </div>
    </div>
  )
}
