import React, { Component } from 'react';
import '../Style/Search';

export default class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <div className="seach">
                    <form>
                        <input type="text" value="请输入关键词" />
                        <button type="submit">搜索</button>
                    </form>
                </div>
                <div className="gjc">
                    <p>主要内容：</p>
                    <ul>
                        <a><li>html</li></a>
                        <a><li>css</li></a>
                        <a><li>jquery</li></a>
                        <a><li>javascript</li></a>
                        <a><li>ASP</li></a>
                        <a><li>PHP</li></a>
                    </ul>
                </div>
                <div style={{ clear: 'both' }} />
                <div className="rpwz">
                    <p>热评文章</p>
                    <ul>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                        <a><li><img src="src/Images/icon2.gif" alt="" />如何打造有价值，让人上瘾的的内容</li></a>
                    </ul>
                </div>
                <div className="ggw">
                    <img src="src/Images/log.png" alt="" />
                    <p>卢文博</p>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

