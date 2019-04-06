import React, { Component } from 'react';
import Router from 'next/router';
import {
  UserTileWrapperStyled,
  UserNameStyled
} from './UserTile.styles';
import Avatar from 'src/components/avatar';

class UserTile extends Component {
  toChatPage = () => {
    const { initUser, user } = this.props;
    Router.push('/chat');
    if (initUser && typeof initUser === 'function' && user.id && user.name) {
      initUser(user.id, user.name);
    }
  }
  render() {
    const { user } = this.props;
    return (
      <UserTileWrapperStyled onClick={this.toChatPage}>
        <Avatar src={user.avatar} />
        <UserNameStyled>{user.name}</UserNameStyled>
      </UserTileWrapperStyled>
    );
  }
}

export default UserTile;