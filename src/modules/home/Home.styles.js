import styled from 'styled-components';
import { slideToTop } from 'styles/animation';
import { boxShadow } from 'styles/common';

export const HomeWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextStyled = styled.div`
  font-size: 1.6em;
  color: rgba(0,0,0,.54);
`;
export const UsersWrapperStyled = styled.div`
  display: flex;
  animation: ${slideToTop} 1s ease;  
  margin: 40px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const UserWrapperStyled = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  width: 100px;
  color: rgba(0,0,0,.54);
  &:hover {
    box-shadow: ${boxShadow};
    color: rgba(0,0,0,.87);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    margin: 5px 0;
  }
`;

export const UserNameStyled = styled.div`
  margin-top: 10px;
  font-size: 1.2em;
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;