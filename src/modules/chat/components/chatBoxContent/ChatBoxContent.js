import React, { Component } from 'react';
import {
  ChatBoxContentWrapperStyled
} from './ChatBoxContent.styles';
import { SAMPLE_USERS } from 'lib/enums';
import { getAvatar } from 'lib/utils';
import ChatBoxMessage from '../chatBoxMessage';
class ChatBoxContent extends Component {
  renderMessage = (messageItem, index) => {
    const { currentChatData, userId } = this.props;
    const { connectionId, message } = messageItem;
    const isIncoming = connectionId !== userId;
    const shouldShowAvatar = index === 0 || connectionId !== currentChatData[index - 1].connectionId;
    const avatar = getAvatar(connectionId);
    return (
      <ChatBoxMessage
        key={index}
        avatar={avatar}
        shouldShowAvatar={shouldShowAvatar}
        message={message}
        isIncoming={isIncoming}
      />
    );
  }
  render() {
    const { currentChatData } = this.props;
    return (
      <ChatBoxContentWrapperStyled>
        {currentChatData.map(this.renderMessage)}
      </ChatBoxContentWrapperStyled>
    );
  }
}

export default ChatBoxContent;