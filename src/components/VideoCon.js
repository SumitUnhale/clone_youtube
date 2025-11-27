import React, { useEffect, useState } from 'react'
import { YOU_VIDEO_API } from '../utils/contants';
import VideoCard from './VideoCard';

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
      {videos.map((video) => <VideoCard key={video.key} info={video} />)}
    </div>
  )
}

export default VideoCon
