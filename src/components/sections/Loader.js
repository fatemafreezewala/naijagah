
import React from 'react'

const Loader = () => {
  return (
    <div className='text-center'>
        <img style={{width:300,height:300}} src={process.env.PUBLIC_URL + "/assets/img/loader.gif"}></img>
    </div>
  )
}

export default Loader