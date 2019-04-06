import React, { Component } from 'react';
import { ChatBoxWrapperStyled } from './ChatBox.styles';
import ChatBoxHeader from '../chatBoxHeader';
import ChatBoxContent from '../chatBoxContent';
import ChatBoxInput from '../chatBoxInput';

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