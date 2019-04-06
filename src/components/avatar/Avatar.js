import React, { Component } from 'react';
import { AvatarWrapperStyled } from './Avatar.styles';

const  Avatar = ({ src, small = false }) => (
  <AvatarWrapperStyled small={small}>
    <img src={src}/>
  </AvatarWrapperStyled>
)

export default Avatar;