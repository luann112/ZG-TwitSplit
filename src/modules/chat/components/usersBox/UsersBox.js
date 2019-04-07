import React, { Component } from 'react';
import { UsersBoxWrapperStyled } from './UserBox.styles';
import SearchBox from '../searchBox';
import ConnectionsList from '../../containers/connectionsList';

class UsersBox extends Component {
  render() {
    return (
      <UsersBoxWrapperStyled>
        <SearchBox />
        <ConnectionsList />
      </UsersBoxWrapperStyled>
    );
  }
}

export default UsersBox;