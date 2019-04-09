import React, { Component } from 'react';
import { UsersTabWrapperStyled } from './UsersTab.styles';
import UsersBox from '../usersBox';

class UsersTab extends Component {
  render() {
    return (
      <UsersTabWrapperStyled>
        <UsersBox />
      </UsersTabWrapperStyled>
    );
  }
}

export default UsersTab;