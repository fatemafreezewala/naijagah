
import React, { Component, Fragment,useState } from 'react';
import Sidebar from '../../layouts/Shopsidebar';
import listing from '../../../data/listings.json';
import Loader from '../../layouts/Loader';
import '../../../assets/js/custom.js'
import '../../../assets/css/custom.css'
import '../../../assets/js/pillButton.js'
import ButtonWithIcon from '../../layouts/ButtonWithIcon';
import api from '../../../constants/api';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Listcomponent from './Listcomponent';

 
const Content = () => {
    const [items, setitems] = useState(null)
    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(4)
    const [loading, setloading] = useState(false)
    React.useEffect(() => {
        getListingData()
      return () => {
        getListingData()
      }
    }, [])
    React.useEffect(()=>{
        // const ref = collection('savedProperty')
        // ref.onSnapshot((querySnapshot)=>{
        //   const items = []
        //   querySnapshot.forEach((doc)=> items.push(doc.data()))
        // //setMessages(items)
        // })
    })
   
    
         const getListingData =()=>{
        api.get('property/getListings').then(function (response) {
            console.log(response.data.data)
            let dataFilter = response.data.data
            dataFilter.forEach(element => {
                element.is_checked = false
                element.img_array = element.meta_images.split(',')
            });
            console.log(dataFilter)
            setitems(dataFilter)
            
          });
        
    }
    const handleClick = (event)=>{
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        setloading(true)
        setTimeout(() => {
            setcurrentPage(Number(event.target.getAttribute('data-page')))
            setloading(false)
           
        }, 2000);

    }
 
    // const renderPagination = pageNumbers.map(number => {
    //     const activeCondition = this.state.currentPage === number ? 'active' : ''
    //     return (
    //         <Fragment key={number}>
    //             {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
    //                 <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
    //             </li> : ''}
    //         </Fragment>
    //     );
    // });
  return (
    <div className="section  pagination-content " style={{paddingTop:120,background:'#F2F6F7'}}>
    <div className="container" style={{padding:0,position:'relative'}}>
    
          <div className='listing' style={{marginBottom:0,paddingTop:15,paddingBottom:15,paddingRight:30,paddingLeft:30}}>
          <div className="row">
            <div className='col-lg-2 col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Purpose</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>City</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Society</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Area</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Property Type</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            
        </div>
        <div className="row">
            <div className='col-lg-2 col-pl-8'>
               <div className="form-group form-grp-filter no-margin-bottom">
                   <select className="form-control" name="cycle">
                       <option>Price (PKR)</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-lg-2 col-pl-8'>
               <div className="form-group form-grp-filter no-margin-bottom">
                   <select className="form-control" name="cycle">
                       <option>Size (SQ. YD) to</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-lg-2 col-pl-8'>
               <div className="form-group form-grp-filter no-margin-bottom">
                   <select className="form-control" name="cycle">
                       <option>Verified</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-2 col-pl-8'>
               <div className="form-group form-grp-filter no-margin-bottom">
                   <select className="form-control" name="cycle">
                       <option>Category</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-2 col-pl-8'>
               <div className="form-group form-grp-filter no-margin-bottom">
                   <select className="form-control" name="cycle">
                       <option>Ownership Type</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-2 col-pl-8'>
               <div className="form-group form-grp-filter no-margin-bottom">
                   <select className="form-control" name="cycle">
                       <option>More</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            
        </div>
        <ButtonWithIcon text="Find"></ButtonWithIcon>
          </div>
         
    </div>
   <div className="container">
      
       
        
      
       <div className="row">
           {/* Sidebar Start */}
           {/* <div className="col-lg-4">
               <Sidebar />
           </div> */}
           {/* Sidebar End */}
           {/* Posts Start */}
           <div className="col-lg-9 mt-5">
               {/* Controls Start */}
              
               {/* Controls End */}
               <div className="row mt-4" >
               <div className="acr-global-listing-controls">
                   
               <input type="checkbox" class="pill-button-input" checked="checked"/>
               <span class="pill-button">
               <span class="pill-button-selection pill-button-selection_on pill-button-selection_active">Listed by Owner</span>
               <span class="pill-button-selection pill-button-selection_off">Listed by Agent</span>
               <span class="pill-button-highlight"></span>
               </span>

                   <div style={{display:'flex',alignItems:'center'}}> 
                       <label style={{fontWeight:'bold'}}>Sort By</label>
                       <div className="form-group form-grp-filter" style={{marginLeft:20}}>
                           <select className="form-control" name="cycle">
                               <option>Sort</option>
                               <option value="Daily">Daily</option>
                               <option value="Monthly">Monthly</option>
                               <option value="Yearly">Yearly</option>
                           </select>
                       </div>
                   </div>
               </div>
               
                   {/* Listing Start */}
               
                   {/* Listing End */}
               </div> 
            
               {items && items.map((item, i) => {
                    return (<Listcomponent  item={item}></Listcomponent>)

                })}
               {/* Pagination Start */}
              {/* <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h5 style={{margin:0}}>Showing 1–4 of 10 results</h5>
               {pageNumbers.length > 1 ?
                   <ul className="pagination">
                      
                       {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                           <li className="page-item">
                               <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                   <i className="fas fa-chevron-left" />
                               </Link>
                           </li>
                           : ''}
                   
                       {renderPagination}
                      
                       {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                           <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                               <i className="fas fa-arrow-right" />
                           </Link>
                       </li>
                           : ''}
                    
                   </ul> : ''}
              </div> */}
               {/* Pagination End */}
           </div>
           {/* Posts End */}
       </div>
   </div>
</div>
  )
}

export default Content




 

