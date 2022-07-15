import React, { Component, Fragment } from 'react';
import Bluecta from '../../layouts/Bluecta';
import Agentsslider from './Agentsslider';
import Banner from './Banner';
import BuyRent from './BuyRent'
import BuySell from './BuySell'
import WhatweOffer from './WhatweOffer';
import { PopupWidget } from "react-calendly";

class Content extends Component {
    render() {
        return (
            <Fragment>
                <PopupWidget
        url="https://calendly.com/fflaurelit"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("acres")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#20B69E" 
      />
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