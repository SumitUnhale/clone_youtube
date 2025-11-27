import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

function Head() {

  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 shadow-lg'>
      <div className='flex col-span-2'>
        <img className='h-8 cursor-pointer' onClick={() => handleMenuToggle()} alt="menubar" src='https://cdn.creazilla.com/icons/3206632/menu-icon-md.png' />
        <a href='/'><img className='h-14 -mt-3 mx-4' alt='youtube logo' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' /></a>
      </div>
      <div className='col-span-9 pl-[14%]'>
        <input type='text' className='border border-gray-200 px-4 p-2 w-1/2 rounded-l-full' placeholder='Search.....' />
        <button className='button p-2 px-4 border border-gray-200 bg-gray-200 rounded-r-full hover:bg-gray-300 hover:border-gray-300 hover:text-white'> 🔍 </button>        
      </div>
      <div className='col-span-1'>
        <img alt='User' className='h-9 pl-[60%]' src='https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0' />
        </div>
    </div>
  )
}

export default Head;
