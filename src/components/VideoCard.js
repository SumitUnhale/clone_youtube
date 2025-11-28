import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails} = snippet;

    
  return (
    <div className='p-3 m-2 mx-4 w-60 h-[95%] shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='vide image' />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export const AddCom = ( { info } ) => {
    return(
        <div className='p-1 border border-red-900'>
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard
