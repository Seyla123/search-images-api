import React from 'react'
import Image from './Image'
function ImageList({images}) {
const renderedImg = images.map((image)=>{
    return <Image key={image.id} img={image}/>
})
  return (
    <div className='grid grid-cols-4 gap-4'>
    {renderedImg}
    </div>
    
  )
}

export default ImageList