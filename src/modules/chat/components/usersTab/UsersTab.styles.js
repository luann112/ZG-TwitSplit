import styled, { css } from 'styled-components';

export const UsersTabWrapperStyled = styled.div`
  position: absolute;
  display: none;
  transition: all 300ms ease;
 
  @media (max-width: 768px) {
    display: flex;
    height: 100%;
    width: 550px;
    left: -600px;
    ${props => props.isShowUsersTab && css`
      left: -20px;
    `}
  }
  @media (max-width: 540px) {
    width: 100%;
    left: -10px;
  }
`;