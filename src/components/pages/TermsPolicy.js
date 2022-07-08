import React, { Component, Fragment } from 'react'
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

export default function TermsPolicy() {
  return (
    <Fragment>
                <MetaTags>
                    <title>Naijagah | Terms & Policy</title>
                    <meta
                        name="description"
                        content="#"
                    /> 
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Terms & Policy'}} />
                <div className="section mt-5"> 
                    <div className="container">
                   
                            <div className="row">
                                <p>
                                At Naijagah, we understand that people everywhere are searching for a home to call their own. A home is a cherished memory that lasts forever, where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate We want to make the journey as joyful as the moment when you finally find the perfect home. So we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home. At makaan.com, we help you find joy.
                                </p>
                                <br/>
                            <p>
                            We want to make the journey as joyful as the moment when you finally find the perfect home. So we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home. At makaan.com, we help you find joy. To be the first choice for our consumers and partners in their journey of discovering, renting, buying, selling and financing a home. We do that with data, design, technology, and above all the passion of our people, while delivering value to our shareholders.
                            </p>
                            <br/>
                            <p>
                            To be the first choice for our consumers and partners in their journey of discovering, renting, buying, selling and financing a home. We do that with data, design, technology, and above all the passion of our people, while delivering value to our shareholders.
                            </p>
                            </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
  )
}
