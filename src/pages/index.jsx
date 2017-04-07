import React, { Component } from 'react';
import Header from '../Components/Header';
import Listall from '../Components/Listall';
import Search from '../Components/Search';
import FooterNav from '../Components/FooterNav';
import Footer from '../Components/Footer';
import '../Style/Index';

export default class Index extends Component {
    render() {
        return (
                <div className="container">
                    <Header />
                    <div className="main">
                        <div className="main-left">
                            <Listall />
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
