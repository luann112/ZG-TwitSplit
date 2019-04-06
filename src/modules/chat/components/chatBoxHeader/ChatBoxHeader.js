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
          <Avatar small 
            src="/static/img/thanos.jpg"
          />
          <UserNameStyled>Jan</UserNameStyled>
        </ChatBoxHeaderInnerWrapperStyled>
      </ChatBoxHeaderWrapperStyled>
    );
  }
}

export default ChatBoxHeader;