import React, { Component } from 'react';
import {
  ChatBoxHeaderStyled,
  AvatarsWrapperStyled,
  UserNameStyled
} from './ChatBoxHeader.styles';

class ChatBoxHeader extends Component {
  render() {
    return (
      <ChatBoxHeaderStyled>
        <AvatarsWrapperStyled></AvatarsWrapperStyled>
        <UserNameStyled>Jan</UserNameStyled>
      </ChatBoxHeaderStyled>
    );
  }
}

export default ChatBoxHeader;