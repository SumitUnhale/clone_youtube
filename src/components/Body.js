import Sidebar from './Sidebar'
import MainCon from './MainCon'
import VideoPage from './VideoPage'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex mt-2'>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default Body
