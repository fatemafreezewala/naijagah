import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/submit-listing/Content';

class Submitlisting extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Naijagh | Add Listing</title>
                    <meta
                        name="description"
                        content="Naijagh | Add Listing"
                    /> 
                </MetaTags>
                <Header/>
               
                <Content/> 
                <Footer/>
            </Fragment>
        );
    }
}

export default Submitlisting;