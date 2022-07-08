import React,{useState} from 'react'

export default function Overlooking({handleRadio}) {
    const [finaloverlook, setoverlooking] = useState('')
    const overlooking = [  
        { id: 4, icon: '/assets/img/overlooking/o4.svg', title: 'Garden / Park' },
        { id: 2, icon: '/assets/img/overlooking/o3.svg', title: 'Corner Property' },
        { id: 1, icon: '/assets/img/overlooking/o2.svg', title: `Wide Road` },
      
        { id: 3, icon: '/assets/img/overlooking/o1.svg', title: 'General' },
        
       
    ]; 
  return (
    <div className="row acr-listing-feature-row">{overlooking.map((item, i) => (
        <div key={i} className="col-6 col-lg-3 col-md-3 mb-3">
            <label 
            onClick={()=>{
                handleRadio(item.title,'meta_overlooking')
                setoverlooking(item.title)
            }} 
            className="acr-listing-feature ">

                <input  type="radio" name={"feature" + item.id + ""} />
                {/* <div style={{background:'#297ce0',height:15,width:15,flexDirection:'row',justifyContent:'center',alignItems:'center'}}> */}
                    {finaloverlook == item.title ? (<i className=" fas fa-check" />) : (<div></div>)}
                {/* </div>
                 */}
                <img className='g-img' src={process.env.PUBLIC_URL + item.icon}  alt="" />
                {/* <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} /> */}
                <p>{item.title} </p>
            </label>
        </div>
    ))}</div>
  )
}
