import React from 'react';
import {
  ProfileWrapperStyled,
  UserNameStyled
} from './Profile.styles';
import { getAvatar } from 'lib/utils';
import Avatar from '../avatar';

const Profile = ({ userId, userName }) => userId && (
  <ProfileWrapperStyled>
    <UserNameStyled>{userName}</UserNameStyled>
    <Avatar size="xsmall" src={getAvatar(userId)} />    
  </ProfileWrapperStyled>
);


export default Profile;