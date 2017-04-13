import React, { Component, PropTypes } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import FooterNav from '../Components/FooterNav';
import Footer from '../Components/Footer';
import '../Style/Index';

export default class Index extends Component {
    static propTypes = {
        children: PropTypes.element,
    };

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };
    render() {
        return (
                <div className="container">
                    <Header />
                    <div className="main">
                        <div className="main-left">
                            {this.props.children}
                        </div>
                        <div className="main-right">
                            <Search />
                        </div>
                        <div style={{ clear: 'both' }} />
                    </div>
                    <FooterNav />
                    <Footer />
                </div>
        );
    }
}
