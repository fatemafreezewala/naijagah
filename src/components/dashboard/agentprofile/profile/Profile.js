import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../../../layouts/Breadcrumb';
import Footer from '../../../layouts/Footer';
import Header from '../../../layouts/Header';
import Content from './Content';

class Profile extends Component {
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
                <Breadcrumb breadcrumb={{pagename:`Agent's Profile`}} />
                <Content></Content>
                <Footer/>
            </Fragment> 
        );
    }
}

export default Profile;