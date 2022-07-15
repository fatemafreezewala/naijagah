import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Footer from '../../../layouts/Footer';
import Header from '../../../layouts/Header';
import Breadcrumb from '../../../layouts/Breadcrumb';
import Content from './Content';

class Agentrating extends Component { 
    render() { 
        return (
            <Fragment>
                <MetaTags>
                    <title>Nai Jagah | Listing</title>
                    <meta
                        name="description"
                        content="#"
                    /> 
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:"Agent's Rating"}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agentrating;