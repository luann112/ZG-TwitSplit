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
  font-size: 2em;
  color: rgba(0,0,0,.54);
`;
export const UsersWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  animation: ${slideToTop} 1s ease;  
  margin: 40px 0px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
  }
`;
export const UserWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  width: 150px;
  color: rgba(0,0,0,.54);
  &:hover {
    box-shadow: ${boxShadow};
    color: rgba(0,0,0,.87);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px 0;
    width: 80%;
  }
`;

export const UserNameStyled = styled.div`
  flex: 1;
  margin-top: 10px;
  font-size: 1.2em;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 20px 0 30px;
    text-align: left;
  }
`;