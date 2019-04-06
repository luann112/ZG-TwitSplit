import React, { Component } from 'react';
import { ChatWrapperStyled } from './Chat.styles';
import ChatBox from './components/chatBox';
import UsersBox from './components/usersBox';

class Chat extends Component {
  render() {
    return (
      <ChatWrapperStyled className="container">
        <UsersBox />
        <ChatBox />
      </ChatWrapperStyled>
    );
  }
}

export default Chat;