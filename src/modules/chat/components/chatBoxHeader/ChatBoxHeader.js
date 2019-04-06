import React, { Component } from 'react';
import {
  ChatBoxHeaderWrapperStyled,
  ChatBoxHeaderInnerWrapperStyled,
  AvatarsWrapperStyled,
  UserNameStyled
} from './ChatBoxHeader.styles';
import Avatar from 'src/components/avatar';

class ChatBoxHeader extends Component {
  render() {
    return (
      <ChatBoxHeaderWrapperStyled>
        <ChatBoxHeaderInnerWrapperStyled>
          <Avatar />
          <UserNameStyled>Jan</UserNameStyled>
        </ChatBoxHeaderInnerWrapperStyled>
      </ChatBoxHeaderWrapperStyled>
    );
  }
}

export default ChatBoxHeader;