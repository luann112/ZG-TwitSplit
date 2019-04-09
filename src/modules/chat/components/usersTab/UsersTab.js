import React from 'react';
import { UsersTabWrapperStyled } from './UsersTab.styles';
import UsersBox from '../usersBox';

const UsersTab = ({ isShowUsersTab }) => (
  <UsersTabWrapperStyled isShowUsersTab={isShowUsersTab}>
    <UsersBox />
  </UsersTabWrapperStyled>
);

export default UsersTab;