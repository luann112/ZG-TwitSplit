import React, { Component } from 'react';
import {
  ChatBoxHeaderWrapperStyled,
  ChatBoxHeaderInnerWrapperStyled,
  AvatarsWrapperStyled,
  UserNameStyled,
  ActionsStyled,
  IconWrapperStyled
} from './ChatBoxHeader.styles';
import Avatar from 'src/components/avatar';
import Icon from 'src/components/icon';

const ChatBoxHeader = ({ selectedConnectionName, avatar }) => (
  <ChatBoxHeaderWrapperStyled>
    <ChatBoxHeaderInnerWrapperStyled>
      <Avatar
        size="small" 
        src={avatar}
      />
      <UserNameStyled>{selectedConnectionName}</UserNameStyled>
      <ActionsStyled>
        <IconWrapperStyled>
          <Icon type="phone" />
        </IconWrapperStyled>
        <IconWrapperStyled>
          <Icon type="video-camera" />
        </IconWrapperStyled>         
      </ActionsStyled>
    </ChatBoxHeaderInnerWrapperStyled>
  </ChatBoxHeaderWrapperStyled>
);

export default ChatBoxHeader;