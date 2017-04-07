import React, { Component } from 'react';
import '../Style/FooterNav';

export default class FooterNav extends Component {
    render() {
        return (
            <div className="footernav-container">
                <div className="lj">
                    <div className="cont">
                        <div className="cong-left" />
                        <div className="cont-right">
                            <ul>
                                <a><li>个人简介</li></a>
                                <a><li>经验</li></a>
                                <a><li>热文</li></a>
                                <a><li>留言</li></a>
                            </ul>
                            <br />
                            <p>装逼、我们是认真的</p>
                        </div>
                    </div>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}
