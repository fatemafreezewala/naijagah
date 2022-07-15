import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/listinglist/Content';

class Listinglist extends Component { 
    render() { 
        return (
            <Fragment >
                <MetaTags>
                    <title>Nai Jagah | Listing</title>
                    <meta
                        name="description"
                        content="#"
                    /> 
                </MetaTags> 
                <Header/>
               
                <Content/>
                <Footer/>
            </Fragment>
        );
    } 
}

export default Listinglist;