import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { ChatWrapperStyled, InnerWrapperStyled } from './Chat.styles';
import ChatBox from './components/chatBox';
import UsersBox from './components/usersBox';
import UsersTab from './containers/usersTab';

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
        <InnerWrapperStyled usersBox>
          <UsersBox />
        </InnerWrapperStyled>
        <InnerWrapperStyled chatBox>
          <ChatBox />
        </InnerWrapperStyled>
        <UsersTab />
      </ChatWrapperStyled>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  userId: auth.userId,
});
export default connect(mapStateToProps)(Chat);