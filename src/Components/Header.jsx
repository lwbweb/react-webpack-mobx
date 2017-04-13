import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Style/Header';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <header className="lwbhead">
                    <div className="logo">
                        <img src="src/Images/logo.png" alt="" />
                    </div>
                    <nav className="lwbnav">
                        <ul>
                            <Link to="/"><li>首页</li></Link>
                            <Link to="/me"><li>个人</li></Link>
                            <Link to="/article"><li>文章</li></Link>
                            <Link to="/essay"><li>随笔</li></Link>
                            <Link to="/message"><li>留言</li></Link>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

