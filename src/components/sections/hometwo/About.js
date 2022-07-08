import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="section"> 
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 acr-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/about/about1.png"} alt="img" />
                            <div className="acr-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                               
                                <p className="subtitle">
                                    At Naijagah, we understand that people everywhere are searching for a home to call their own. A home is a cherished memory that lasts forever, where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate
                                </p>
                                <p className="subtitle">
                                    We want to make the journey as joyful as the moment when you finally find the perfect home. So we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home. At makaan.com, we help you find joy.
                                </p>
                                <p className="subtitle">To be the first choice for our consumers and partners in their journey of discovering, renting, buying, selling and financing a home. We do that with data, design, technology, and above all the passion of our people, while delivering value to our shareholders.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;