import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component { 
    render() {
        return (
           
            <div className="footer-top buyrent">
                <div className="container">
                    <div className="row footer-btn-wrapper">
                    <div className="sidebar-widget">
                    <form method="post">
                      
                        <div className="search-wrapper">
                            <input type="text" className="form-control" placeholder="Search" name="sidebar-search" />
                            <button type="submit" className="btn-custom"><i className="flaticon-search" /></button>
                        </div>
                    </form>
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;