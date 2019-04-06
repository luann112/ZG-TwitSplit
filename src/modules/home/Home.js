import React, { Component } from 'react';
import Router from 'next/router';
import {
  HomeWrapperStyled,
  UserWrapperStyled,
  TextStyled,
  UsersWrapperStyled,
  UserNameStyled
} from './Home.styles';
import Avatar from 'src/components/avatar';
import { SAMPLE_USERS } from 'lib/enums';

class Home extends Component {
  toChatPage = () => {
    Router.push('/chat/')
  }
  renderUser = (user) => {
    return (
      <UserWrapperStyled key={user.id} onClick={this.toChatPage}>
        <Avatar src={user.avatar} />
        <UserNameStyled>{user.name}</UserNameStyled>
      </UserWrapperStyled>
    );
  }
  render() {
    return (
      <HomeWrapperStyled className="container">
        <TextStyled>Who are you?</TextStyled>
        <UsersWrapperStyled>
          {SAMPLE_USERS.map(this.renderUser)}
        </UsersWrapperStyled>
      </HomeWrapperStyled>
    );
  }
}

export default Home;