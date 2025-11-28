import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='p-4 shadow-lg w-44'>
      <ul className='pl-2'>
        <Link to={"/"}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li> 
      </ul>
      <h1 className='font-bold pt-5'>Subcriptions</h1>
      <ul className='pl-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>  
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul className='pl-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>  
      </ul>
    </div>
  )
}

export default Sidebar
