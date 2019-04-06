import React, { Component } from 'react';
import { AvatarWrapperStyled } from './Avatar.styles';

const  Avatar = ({ src }) => (
  <AvatarWrapperStyled>
    <img src={src}/>
  </AvatarWrapperStyled>
)

export default Avatar;