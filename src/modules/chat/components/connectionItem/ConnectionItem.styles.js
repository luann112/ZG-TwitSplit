import styled, { css } from 'styled-components';
import { boxShadow } from 'styles/common';

export const ConnectionItemWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: ${boxShadow};
    background: rgb(207,234,247);
  }
  ${props => props.isActive && css`
    background: rgb(207,234,247);
  `}
`;

export const ConnectionDetailStyled = styled.div`
  flex-direction: column;
  margin-left: 10px;
`;

export const UserNameStyled = styled.div`
  padding: 5px;
  font-weight: bold;
  color: rgba(0,0,0,.87);
`;

export const LastMessageStyled = styled.div`
  padding: 5px;
  font-style: italic;
  color: rgba(0,0,0,.54);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 70%;
`;