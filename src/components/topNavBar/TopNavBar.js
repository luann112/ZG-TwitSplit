import React, { PureComponent } from 'react';
import Router from 'next/router';
import { 
  TopNavBarWrapperStyled,
  TopNavBarStyled,
  ProfileWrapperStyled,
  LogoStyled,
  UsersIconStyled,
 } from './TopNavBar.styles';
 import Profile from '../../containers/profile';
 import Icon from '../icon';

class TopNavBar extends PureComponent {

  toHome = () => {
    Router.push('/')
  }
  toggleUsersTab = () => {
    const { toggleUsersTab } = this.props;
    toggleUsersTab();
  }

  render() {
    return (
      <TopNavBarWrapperStyled>
        <TopNavBarStyled>
          <UsersIconStyled onClick={this.toggleUsersTab}>
            <Icon type="users"/>
          </UsersIconStyled>
          <LogoStyled onClick={this.toHome}>
            <span>TwitSplit</span>
          </LogoStyled>
          <Profile />
        </TopNavBarStyled>
      </TopNavBarWrapperStyled>
    );
  }
}

export default TopNavBar;
