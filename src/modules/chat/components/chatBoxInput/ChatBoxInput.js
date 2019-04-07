import React, { Component } from 'react';
import {
  ChatBoxInputWrapperStyled,
  InputMessageStyled,
  SendIconBtnStyled,
} from './ChatBoxInput.styles';
import Icon from 'src/components/icon';
class ChatBoxInput extends Component {
  render() {
    return (
      <ChatBoxInputWrapperStyled>
        <InputMessageStyled>
          <input 
            placeholder="Type a message ..."
          />
        </InputMessageStyled>
        <SendIconBtnStyled>
          <Icon type="paper-plane-o" />          
        </SendIconBtnStyled>
      </ChatBoxInputWrapperStyled>
    );
  }
}

export default ChatBoxInput;