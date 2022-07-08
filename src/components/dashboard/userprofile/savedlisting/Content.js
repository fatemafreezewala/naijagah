import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import listing from '../../../../data/listings.json';
import classNames from 'classnames';
import Loader from '../../../layouts/Loader';
import '../../../../assets/js/custom.js'
import '../../../../assets/css/custom.css'
import '../../../../assets/js/pillButton.js'
import ButtonWithIcon from '../../../layouts/ButtonWithIcon';
import ListingCard from './ListingCard';
import Header from '../Header'
import Aside from '../Aside'
class Content extends Component {
    constructor() { 
        super();
        this.state = { 
            items: listing,
            currentPage: 1,
            itemsPerPage: 4,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return <ListingCard i={i} item={item}></ListingCard>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        }); 
        return (
            <>
            <Header></Header>
            <div class="container-fluid">
            <div class="row">
                <Aside page="saved"></Aside>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-section">
                

                

       
                <div className="section  pagination-content " >
                 
                 <div className="container">
                    
                     
                      
                    
                     <div className="row">
                         {/* Sidebar Start */}
                         {/* <div className="col-lg-4">
                             <Sidebar />
                         </div> */}
                         {/* Sidebar End */}
                         {/* Posts Start */}
                         <div className="col-lg-9 ">
                             {/* Controls Start */}
                            
                             {/* Controls End */}
                             <div className="row mt-2" >
                            
                             
                                 {/* Listing Start */}
                                 {this.state.loading === false ? renderitems : <Loader />}
                                 {/* Listing End */}
                             </div>
                             {/* Pagination Start */}
                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <h5 style={{margin:0}}>Showing 1–4 of 10 results</h5>
                             {pageNumbers.length > 1 ?
                                 <ul className="pagination">
                                     {/* Prev */}
                                     {/* to show previous, we need to be on the 2nd or more page */}
                                     {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                         <li className="page-item">
                                             <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                 <i className="fas fa-chevron-left" />
                                             </Link>
                                         </li>
                                         : ''}
                                     {/* Prev */}
                                     {renderPagination}
                                     {/* Next */}
                                     {/* to show next, we should not be on the last page */}
                                     {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                                         <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                             <i className="fas fa-arrow-right" />
                                         </Link>
                                     </li>
                                         : ''}
                                     {/* Next */}
                                 </ul> : ''}
                            </div>
                             {/* Pagination End */}
                         </div>
                         {/* Posts End */}
                     </div>
                 </div>
             </div>
                
                </main>
            
            </div>
            </div>
            </>
            
        );
    }
}

export default Content;