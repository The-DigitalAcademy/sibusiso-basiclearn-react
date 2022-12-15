import React from 'react'
import videoSp from '../assets/videoSp.mp4'

const Playvideo = () => {
  return (
    <>
      <div className='videoplay'>
        <video src ={videoSp} autoPlay loop muted/>
      </div>
    </>
  )
}

export default Playvideo
