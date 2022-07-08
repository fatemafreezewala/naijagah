import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from './Content';

class Home extends Component {
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
            
               
                <Content></Content>
            </Fragment> 
        );
    }
}

export default Home;