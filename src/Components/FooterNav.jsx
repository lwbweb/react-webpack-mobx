import React, { Component } from 'react';
import '../Style/FooterNav';

export default class FooterNav extends Component{
	render(){
		return(
			<div className="footernav-container">
				<div class="lj">
		            <div class="cont">
		                 <div class="cong-left">
		                     
		                 </div>
		                 <div class="cont-right">
		                     <ul>
		                         <a href="#"><li>个人简介</li></a>
		                         <a href="#"><li>经验</li></a>
		                         <a href="#"><li>热文</li></a>
		                         <a href="#"><li>留言</li></a>
		                     </ul>
		                     <br/>
		                    <p>装逼、我们是认真的</p>
		                 </div>
		            </div>
		        </div>
		        <div style="clear:both"></div>
		    </div>
		)
	}
}