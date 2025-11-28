import React, { useEffect, useState } from 'react'
import { YOU_VIDEO_API } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoCon = () => {

  const[videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, [])

  const getVideo = async () => {
    const data = await fetch(YOU_VIDEO_API);
    const result = await data.json();
    setVideos(result.items)
    console.log(videos);
    
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video} /></Link>)}
    </div>
  )
}

export default VideoCon
