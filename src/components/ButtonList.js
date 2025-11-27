import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const namesList = ["All", "Music", "Animal", "Cooking", "Dance", "Trip", "Salman Khan", "Shardha Kapoor", "Cricket"]

  return (
    <div className='flex flex-wrap m-1'>
      { 
        namesList.map((name) => (<Button key={name} name={name} />))
      }
    </div>
  )
}

export default ButtonList
