import React, { Component } from 'react';
import '../Style/Header';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <header className="lwbhead">
                    <div className="logo">
                        <img src="src/images/logo.png" alt="" />
                    </div>
                    <nav className="lwbnav">
                        <ul>
                            <a><li>首页</li></a>
                            <a><li>个人简历</li></a>
                            <a><li>经验</li></a>
                            <a><li>热文</li></a>
                            <a><li>留言</li></a>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

