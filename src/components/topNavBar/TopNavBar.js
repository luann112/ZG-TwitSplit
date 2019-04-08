import React, { PureComponent } from 'react';
import Router from 'next/router';
import { 
  TopNavBarWrapperStyled,
  TopNavBarStyled,
  ProfileWrapperStyled,
  LogoStyled,
 } from './TopNavBar.styles';
 import Profile from '../../containers/profile';

class TopNavBar extends PureComponent {

  toHome = () => {
    Router.push('/')
  }

  render() {
    return (
      <TopNavBarWrapperStyled>
        <TopNavBarStyled>
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
