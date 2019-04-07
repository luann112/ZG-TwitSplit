import React, { Component } from 'react';
import {
  ChatBoxInputWrapperStyled,
  InputMessageStyled,
  SendIconBtnStyled,
} from './ChatBoxInput.styles';
import Icon from 'src/components/icon';
class ChatBoxInput extends Component {
  state = { message: '' };
  onInput = (e) => {
    const { selectedConnectionId, sendMessage } = this.props;
    if (e.key === 'Enter') {
      const message = e.target.value;
      sendMessage(selectedConnectionId, message);
    }
  }

  render() {
    return (
      <ChatBoxInputWrapperStyled>
        <InputMessageStyled>
          <input 
            placeholder="Type a message ..."
            onKeyPress={this.onInput}
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