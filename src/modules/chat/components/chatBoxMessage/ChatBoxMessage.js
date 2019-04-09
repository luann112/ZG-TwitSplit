import React, { Component } from 'react';
import {
  ChatBoxMessageWrapperStyled,
  CommonWrapperStyled,
  MessageStyled,
} from './ChatBoxMessage.styles';
import Avatar from 'src/components/avatar';

class ChatBoxMessage extends Component {
  renderAvatar = () => {
    const { shouldShowAvatar, avatar } = this.props;
    return avatar && (
      <CommonWrapperStyled isVisible={shouldShowAvatar}>
        <Avatar size="mini" src={avatar} />
      </CommonWrapperStyled>
    );
  }
  render() {
    const { isIncoming = false, message, isError = false } = this.props;
    return (
      <ChatBoxMessageWrapperStyled isIncoming={isIncoming} >
        {this.renderAvatar()}
        <MessageStyled isIncoming={isIncoming} isError={isError}>
          {message}
        </MessageStyled>
      </ChatBoxMessageWrapperStyled>
    );
  }
}

export default ChatBoxMessage;