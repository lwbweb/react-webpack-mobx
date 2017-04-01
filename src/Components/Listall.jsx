import React, { Component } from 'react';
import '../Style/Listall';

export default class Listall extends Component{
	render () {
		return (
            <div className="listall-container">
    			<div className="tj">
                     <a href="#"><h2>web前端开发工程师</h2></a>
                     <P>一个web前端开发工程师需要具备的技能，包括：html、css、一种css框架（bootstrap）、一种javascript框架（jquery）。一个成功的人，实力+机遇，缺一不可。千里马常有、而伯乐不常有，待在一个小的公司，所涉及的范围狭小，即使俩三年经验，依旧如故，不能突破。</P>
                </div>
                <div className="lb">
                    <a href="#">
                        <div className="lbtp">
                            <img src="images/123.png" />
                        </div>
                        <div className="lbjs">
                            <h2>如何打造有价值，让人上瘾的的内容</h2>
                            <span>发布时间:2016-02-15</span>
                            <p>回顾下你发布过的内容——博客、社交媒体文章、视频和图片等。如果你仍然很难赚到大家的浏览量，那就该采取新方法了。某人点进你的网站或者博客，看一眼然后就离开。你的内容需要有一定的质量，能够吸引读者注意力，确保他们在一天或者一周后仍会访问。换言之，你的内容需..</p>
                        </div>
                    </a>
                 </div>
                 <div style="clear:both"></div>
            </div>
		);
	}
}