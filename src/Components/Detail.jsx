import React, { Component } from 'react';
import '../Style/Detail';

export default class Detail extends Component {
    render() {
        return (
            <div className="detail-container">
                <h1 className="title">如何打造有价值，让人上瘾的内容</h1>
                <p className="time">发布时间：2017-4-13 11：30：50</p>
                <div className="content">
                    这是详情页啊
                </div>
            </div>
        );
    }
}
