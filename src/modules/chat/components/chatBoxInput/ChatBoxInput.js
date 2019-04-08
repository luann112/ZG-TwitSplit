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
    const message = e.target.value;    
    this.setState({ message });
  }
  sendMessage = () => {
    const { sendMessage, selectedConnectionId } = this.props;
    const { message } = this.state;
    if (message !== '') {
      sendMessage(selectedConnectionId, message);
      this.setState({ message: '' });
    }
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.sendMessage();      
    }
  }

  render() {
    const { message } = this.state;
    
    return (
      <ChatBoxInputWrapperStyled>
        <InputMessageStyled>
          <input 
            placeholder="Type a message ..."
            onChange={this.onInput}
            onKeyPress={this.onKeyPress}
            value={message}
          />
        </InputMessageStyled>
        <SendIconBtnStyled onClick={this.sendMessage}>
          <Icon type="paper-plane-o" />          
        </SendIconBtnStyled>
      </ChatBoxInputWrapperStyled>
    );
  }
}

export default ChatBoxInput;