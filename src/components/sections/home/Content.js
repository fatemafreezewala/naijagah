import React, { Component, Fragment } from 'react';
import Bluecta from '../../layouts/Bluecta';
import Agentsslider from './Agentsslider';
import Banner from './Banner';
import BuyRent from './BuyRent'
import BuySell from './BuySell'
import WhatweOffer from './WhatweOffer';
class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <BuyRent></BuyRent>
                {/* <Categories/>  */}
                {/* <Listingslider/> */}
                {/* <Toplistings/> */} 
                {/* <Singleagent/>  */}
                <WhatweOffer></WhatweOffer>
                <BuySell/>
                {/* <Latestblog/> */}
                {/* <Testimonials/> */}
                {/* <div className="section pt-0">
                    <Bluecta/>
                </div> */}
            </Fragment>
        );
    }
}

export default Content;