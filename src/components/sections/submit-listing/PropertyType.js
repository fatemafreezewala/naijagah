import React from 'react'
const overlooking = [ 
    { id: 4, icon: '/assets/img/propertytype/house/i1.svg', title: 'House' },
    { id: 2, icon: '/assets/img/propertytype/house/i2.svg', title: 'Apartment' },
    { id: 3, icon: '/assets/img/propertytype/house/i4.svg', title: 'Room' },
    { id: 3, icon: '/assets/img/propertytype/house/i6.svg', title: 'General' },
    { id: 1, icon: '/assets/img/propertytype/house/i5.svg', title: `Upper Portion` },
    { id: 1, icon: '/assets/img/propertytype/house/i3.svg', title: `Penthouse` }
];
export default function PropertyType() {
    const [option, setOption] = React.useState('buy')
    const [location, setLocation] = React.useState('')
  return (
    // <div className="section light-bg infographics-2 bg-norepeat bg-bottom" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/pattern.png )" }}>
            <div className="container"> 
               
                <div className="row"> 
                    <div className='col-lg-10'>
                    <ul className='buysellUl property-type'>
                        <li onClick={()=>{setOption('buy')}} style={{color:option == 'buy' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:option == 'buy' ? '#20B69E' : '#fff'}}>
                            <img className={option == 'buy' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + '/assets/img/propertytype/house.svg'}  alt="" />
                            <p className={option == 'buy' ? 'green-amenities-text' : ''}>Home</p>
                        </li> 
                        <li onClick={()=>{setOption('sell')}} style={{color:option == 'sell' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:option == 'sell' ? '#20B69E' : '#fff'}}>
                        <img className={option == 'sell' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + '/assets/img/propertytype/land.svg'}  alt="" />
                        <p className={option == 'sell' ? 'green-amenities-text' : ''}>Plot</p>
                        </li>
                        <li onClick={()=>{setOption('rent')}} style={{color:option == 'rent' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:option == 'rent' ? '#20B69E' : '#fff'}}>
                        <img className={option == 'rent' ? 'filter-green' : ''}  src={process.env.PUBLIC_URL + '/assets/img/propertytype/skyline.svg'}  alt="" />
                        <p className={option == 'rent' ? 'green-amenities-text' : ''}>Commercial</p>
                        </li>
                    </ul>
                    <div className="row acr-listing-feature-row">
                                               
                        {overlooking.map((item, i) => (
                            <div key={i} className="col-6 col-lg-2 col-md-3 mb-3">
                                <label onClick={()=>{setLocation(item.title)}} className={location == item.title ? 'acr-listing-feature radio-img-button radio-img-button-checked' : 'acr-listing-feature radio-img-button'}>
                                    <input type="radio" value={"feature" + item.id + ""} name="propertytype" />
                                    <i className="acr-feature-check fas fa-check" />
                                    
                                    <img className={location == item.title ? 'filter-green' : ''} src={process.env.PUBLIC_URL + item.icon}  alt="" />
                                   
                                    <p className={location == item.title ? 'green-amenities-text' : ''}>{item.title} </p>
                                </label>
                            </div>
                        ))}
                        
                    </div>
                    </div>
             
                    
                </div>
            </div>
        // </div>
  )
}