import React, { Component } from 'react';
import '../Style/Message';

export default class Message extends Component {
    render() {
        return (
            <div className="message-container">
                <h1>留言板</h1>
                <p className="tip">如果您有什么意见和建议，或者交流，请在此处发表!</p>
                <form>
                <p><label htmlFor="name">您的称呼:</label><input name="name" type="text" placeholder="称呼" maxLength="4" /></p>
                <p><label htmlFor="tel">联系方式:</label><input name="tel" type="text" placeholder="联系方式" maxLength="11" /></p>
                <p><label htmlFor="content">内容:</label><input wrap="virtual" name="content" type="textarea" placeholder="意见、建议" /></p>
                <input type="submit" value="提交" className="submitBtn" />
                </form>
            </div>
        );
    }
}

