import React, { Component } from 'react';
import { AvatarWrapperStyled } from './Avatar.styles';

const  Avatar = ({ src, size }) => (
  <AvatarWrapperStyled size={size}>
    <img src={src}/>
  </AvatarWrapperStyled>
)

export default Avatar;