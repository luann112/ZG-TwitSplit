import styled, { css } from 'styled-components';

export const ProfileWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  visibility: hidden;
  ${props => props.isVisible && css`
    visibility: visible;
  `}
`;

export const UserNameStyled = styled.div`
  margin-right: 1em;
  color: rgba(0,0,0,.87);
  font-family: 'Raleway', sans-serif;
`;