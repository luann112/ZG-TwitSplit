import React, { Component } from 'react';
import { ChatBoxWrapperStyled } from './ChatBox.styles';
import ChatBoxHeader from '../../containers/chatBoxHeader';
import ChatBoxContent from '../../containers/chatBoxContent';
import ChatBoxInput from '../../containers/chatBoxInput';

class ChatBox extends Component {
  render() {
    return (
      <ChatBoxWrapperStyled>
        <ChatBoxHeader />
        <ChatBoxContent />
        <ChatBoxInput />
      </ChatBoxWrapperStyled>
    );
  }
}

export default ChatBox;