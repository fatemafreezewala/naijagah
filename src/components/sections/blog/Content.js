import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { blogblock } from '../../../data/bloglist.json';

import api from '../../../constants/api';
import imgUrl from '../../../constants/imgUrl'
import Loader from '../Loader';

const Content = () => {
    const [blogs, setBlogs] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        getBlogs()
    
      return () => {
        getBlogs()
      }
    }, [])
    
    const getBlogs = () =>{
        setLoading(true)
        api.get('/blogs')
            .then((response) => {
                let data = response.data.data
                data.forEach(element => {
                    element.imgArray = element.blog_imgs.split(',');
                });
            setBlogs(data)
            setLoading(false)
            }, (error) => {
                setLoading(false)
            }); 
    }
  return (
    <div className="section posts pagination-content">
    <div className="container">
        {loading == true ? (<Loader></Loader>) : (<div className="row">
            {/* Posts Start */}
            <div className="col-lg-12 mt-5">
                    <div className="row">
                    {blogs && blogs.map((item, i) =>(<div key={i} className="col-md-4 masonry-item">
                        <article className="post">
                            <div className="post-thumbnail">
                                <Link to={'/blog-single/' + item.blog_id +'/'+item.blog_title.replace(/[^a-zA-Z0-9]/g,' ').split(' ').join('-')}>
                                    <img src={imgUrl + item.imgArray[0]} alt="blog post" /></Link>
                            </div>
                            <div className="post-body">
                                {/* <div className="post-author">
                                    <div className="post-author-body">
                                        <p> <Link to="#">{item.authorname}</Link> </p>
                                        <span className="post-date">{item.postdate}</span>
                                    </div>
                                </div> */}
                                <h5 className="post-title"> <Link to="/blog-single">{item. blog_title}</Link> </h5>
                                <p className="post-text">
                                    {item.blog_desp.slice(0, 80)}
                                </p>
                                <div className="post-controls pt-3 mx-auto">
                                    <Link to={'/blog-single/' + item.blog_id +'/'+item.blog_title.replace(/[^a-zA-Z0-9]/g,' ').split(' ').join('-')} className="btn-custom secondary btn-sm">Read More</Link>
                                </div>
                            </div>
                        </article>
                    </div>))}
                    </div>
                   
                    {/* Listing End */}
                {/* </Masonry> */}
                {/* Pagination Start */}
                {/* {pageNumbers.length > 1 ?
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
                                <i className="fas fa-chevron-right" />
                            </Link>
                        </li>
                            : ''}
                        
                    </ul> : ''} */}
                {/* Pagination End */}
            </div>
        
        </div>)}
        
    </div>
</div>
      
  )
}

export default Content

