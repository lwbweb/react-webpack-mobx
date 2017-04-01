import React,{ Component } from 'react';
import '../Style/Header';

export default  class Header extends Component{
	render() {
		return (
			<div className="header-container">
				 <header className="lwbhead">
			        <div className="logo">
			            <img src="images/logo.png" />
			        </div>
			        <nav className="lwbnav">
			            <ul>
			                <a href="#"><li>首页</li></a>
			                <a href="#"><li>个人简历</li></a>
			                <a href="#"><li>经验</li></a>
			                <a href="#"><li>热文</li></a>
			                <a href="#"><li>留言</li></a>
			            </ul>
			        </nav>
			    </header>
		    </div>
		);
	}
}