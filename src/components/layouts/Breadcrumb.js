import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="subheader bg-cover bg-bottom dark-overlay" style={{ backgroundImage:  "linear-gradient(90deg, rgba(32,182,158,0.4) 0%, rgba(32,182,158,0.4) 0%),url(" + process.env.PUBLIC_URL + "/assets/img/about/about-us.png)" }}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className="text-white">{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            {/* <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"> <i className="fas fa-home" /> </Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol> */}
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;