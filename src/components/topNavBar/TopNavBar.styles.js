import styled from 'styled-components';
import { boxShadow } from 'styles/common';

export const TopNavBarWrapperStyled = styled.div`
  height: 62px;
  background: rgb(239, 239, 239); 
`;

export const TopNavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 40px;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0,0,0,.87);
  box-shadow: ${boxShadow};
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgba(0,0,0,.87);
  i {
    font-size: 1.8em;
    margin-right: 5px;
  }
  span {
    font-size: 1.2em;
    line-height: 1em;
    font-family: 'Roboto Condensed';
    font-weight: 500;
    letter-spacing: 0.1em;
    transition: all 200ms ease;
    &:hover {
      font-size: 1.4em;
      color: rgba(0,0,0,.95);
    }
  }
`;

export const UsersIconStyled = styled.div`
  align-items: center;
  font-size: 1.6em;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;