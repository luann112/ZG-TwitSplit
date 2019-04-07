import React, { Component } from 'react';
import {
  ChatBoxMessageWrapperStyled,
  MessageStyled,
} from './ChatBoxMessage.styles';
import Avatar from 'src/components/avatar';

class ChatBoxMessage extends Component {
  render() {
    const { isIncoming = false, message, avatar, shouldShowAvatar } = this.props;
    return (
      <ChatBoxMessageWrapperStyled isIncoming={isIncoming} >
        <Avatar size="mini" src={avatar} />
        <MessageStyled isIncoming={isIncoming}>
          {message}
        </MessageStyled>
      </ChatBoxMessageWrapperStyled>
    );
  }
}

export default ChatBoxMessage;