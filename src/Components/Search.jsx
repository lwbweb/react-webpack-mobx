import React, { Component } from 'react';
import '../Style/Search';

export default class Search extends Component{
  render(){
    return(
        <div className="search-container">
          <div className="main-right">
              <div className="seach">
                <form>
                  <input type="text" value="请输入关键词" />
                  <button type="submit">搜索</button>
                </form>
              </div>
              <div className="gjc">
                  <p>主要内容：</p>
                  <ul>
                      <a href="#"><li>html</li></a>
                      <a href="#"><li>css</li></a>
                      <a href="#"><li>jquery</li></a>
                      <a href="#"><li>javascript</li></a>
                      <a href="#"><li>ASP</li></a>
                      <a href="#"><li>PHP</li></a>
                  </ul>
              </div>
              <div style="clear:both"></div>
              <div className="rpwz">
                  <p>热评文章</p>
                  <ul>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                     <a href="#"><li><img src="images/icon2.gif" />如何打造有价值，让人上瘾的的内容</li></a>
                  </ul>
              </div>
              <div className="ggw">
                  <img src="images/log.png" />
                  <p>卢文博</p>
              </div>
          </div>
          <div style="clear:both"></div>
        </div>
    )
  }
}
