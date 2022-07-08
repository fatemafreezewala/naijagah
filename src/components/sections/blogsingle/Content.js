import React, { Component, Fragment,useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import { blogblock, blogcomment } from '../../../data/blog.json';
import $ from 'jquery';
import 'magnific-popup';
import Breadcrumb from './Breadcrumb';
import api from '../../../constants/api';
import imgUrl from '../../../constants/imgUrl'
import qs from 'qs';
import Loader from '../Loader';
const Content = () => {
    const { id } = useParams();
    useEffect(() => {
        function popup() {}
        popup()
      return () => {
        popup()  
      }
    }, [])
    const [blogs, setBlogs] = React.useState(null)
    const [blogImages,setblogImages] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        getBlogDetails(id)
    
      return () => {
        getBlogDetails(id)
      } 
    }, [id])
    
    const getBlogDetails = (id) =>{
        setLoading(true)
        api.post('/blogs/blogDetails',qs.stringify({ 'blog_id': id }))
            .then((response) => {
            setBlogs(response.data.data[0])
            let img = response.data.data[0].blog_imgs
            var array = img.split(',');
            setblogImages(array)
            setLoading(false)
            }, (error) => {
            
            });
    }
  return (
      <>
      <Breadcrumb title={blogs && blogs.blog_title}/>
      {loading == true ? (<Loader></Loader>) : (<div className="section blog-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <article className="post-single">
                                <div className="post-meta">
                                  
                                    <span> <i className="far fa-calendar" /> <Link to="#">March 3, 2020</Link> </span>
                                   
                                </div>
                                {blogImages && (<div className="post-thumbnail">
                                    <img src={imgUrl + blogImages[0]} alt="post" />
                                </div>)}
                                
                                <div className="post-content">
                                   {blogs && blogs.blog_desp}
                                </div>
                                <div className="row">
                                    {blogImages && blogImages.map((data)=>(<div className="col-md-6">
                                            <Link  className="gallery-thumb">
                                                <img src={imgUrl + data} alt="post" />
                                            </Link>
                                        </div>))}
                                        
                                        {/* <div className="col-md-6">
                                            <Link to="assets/img/blog/7.jpg" className="gallery-thumb">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/blog/7.jpg"} alt="post" />
                                            </Link>
                                        </div> */}
                                    </div>
                            </article>
                            
                            {/* <div className="section section-padding">
                                <h4>Related Posts</h4>
                                <div className="row">
                                    {blogblock.slice(0, 3).map((item, i) => (
                                        <div key={i} className="col-md-4">
                                            <article className="post single">
                                                <div className="post-thumbnail">
                                                    <Link to="/blog-single"><img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt="blog post" /></Link>
                                                </div>
                                                <div className="post-body">
                                                    <h5 className="post-title"> <Link to="/blog-single">{item.title}</Link> </h5>
                                                    <p className="post-text">
                                                        {item.text.slice(0, 75)}
                                                    </p>
                                                    <div className="post-controls mt-5">
                                                        <Link to="/blog-single" className="btn-custom secondary btn-sm">Read More</Link>
                                                      
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                           
                        </div>
                    </div>
                </div>
            </div>)}
      </>
               
  )
}

export default Content
