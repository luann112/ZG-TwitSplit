import styled, { css } from 'styled-components';
import { slideToRight, slideToLeft } from 'styles/animation';
import { boxShadow } from 'styles/common';


export const ChatWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InnerWrapperStyled = styled.div`
  border-radius: 0.3em;
  box-shadow: ${boxShadow};
  display: flex;
  height: 70%;  
  ${props => props.usersBox && css`
    animation: ${slideToRight} 1s ease;  
    width: 35%;
  `}
  ${props => props.chatBox && css`
    animation: ${slideToLeft} 1s ease;
    width: 50%;
  `}
`;