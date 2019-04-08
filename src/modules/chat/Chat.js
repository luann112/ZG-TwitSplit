import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { ChatWrapperStyled } from './Chat.styles';
import ChatBox from './components/chatBox';
import UsersBox from './components/usersBox';

class Chat extends Component {
  componentDidMount() {
    const { userId } = this.props;
    if (userId === null) {
      Router.push('/')
    }
  }
  render() {
    return (
      <ChatWrapperStyled className="container">
        <UsersBox />
        <ChatBox />
      </ChatWrapperStyled>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  userId: auth.userId,
});
export default connect(mapStateToProps)(Chat);