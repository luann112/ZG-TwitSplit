import React, { Component } from 'react';
import { UserBoxWrapperStyled } from './UserBox.styles';
import SearchBox from '../searchBox';
import ConnectionsList from '../../containers/connectionsList';

class UserBox extends Component {
  render() {
    return (
      <UserBoxWrapperStyled>
        <SearchBox />
        <ConnectionsList />
      </UserBoxWrapperStyled>
    );
  }
}

export default UserBox;