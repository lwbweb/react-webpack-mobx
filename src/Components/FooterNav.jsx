import React, { Component } from 'react';
import { Link } from 'react-router';
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
                                <Link to="/me"><li>个人简介</li></Link>
                                <Link to="/me"><li>经验</li></Link>
                                <Link to="/me"><li>热文</li></Link>
                                <Link to="/me"><li>留言</li></Link>
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
