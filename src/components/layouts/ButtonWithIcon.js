
import React from 'react'

const ButtonWithIcon = ({text,icon}) => {
  return (
    <div className='btn btn-primary btn-sm find-button'>
        <i style={{marginRight:4}} className='flaticon-search'></i>{text}
     </div>
  )
}
 
export default ButtonWithIcon
 