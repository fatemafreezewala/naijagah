import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/blog/Content';

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Naijagah</title>
                    <meta 
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Blog'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Blog;