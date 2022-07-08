import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/RentSellLanding/Content';

class RentSellLanding extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Naijagah | Rent Sell Landing</title>
                    <meta
                        name="description"
                        content="#"
                    /> 
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'RentSellLanding'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RentSellLanding;