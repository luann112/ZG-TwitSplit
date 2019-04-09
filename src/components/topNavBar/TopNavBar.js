import React, { PureComponent } from 'react';
import Router from 'next/router';
import { 
  TopNavBarWrapperStyled,
  TopNavBarStyled,
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
    const { userId } = this.props;
    return (
      <TopNavBarWrapperStyled>
        <TopNavBarStyled>
          {
            userId !== null ? (
            <UsersIconStyled onClick={this.toggleUsersTab}>
              <Icon type="users"/>
            </UsersIconStyled>
            ) : <div />
          }
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
