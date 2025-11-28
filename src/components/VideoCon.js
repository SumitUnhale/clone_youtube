import React, { useEffect, useState } from 'react'
import { YOU_VIDEO_API } from '../utils/contants';
import VideoCard, { AddCom } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoCon = () => {

  const[videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, [])

  const getVideo = async () => {
    const data = await fetch(YOU_VIDEO_API);
    const result = await data.json();
    setVideos(result.items);    
  }

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <AddCom info={videos[0]} />}
      {videos.map((video) => <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video} /></Link>)}
    </div>
  )
}

export default VideoCon
