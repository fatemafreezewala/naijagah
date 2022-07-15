import React from 'react'

const BuyorSell = ({setType,type}) => {
    
  return (
    <div style={{display:'flex',cursor:'pointer'}}>
        <div onClick={()=>{setType('sell')}} className={type == 'sell' ? 'btn-sell-rent-act' : 'btn-sell-rent'}>Sell</div>
        <div style={{marginLeft:10}} onClick={()=>{setType('rent')}} className={type == 'rent' ? 'btn-sell-rent-act' : 'btn-sell-rent'}>Rent</div>
    </div>
  ) 
}
 
export default BuyorSell

