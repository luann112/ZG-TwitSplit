import styled from 'styled-components';
import { slideToTop } from 'styles/animation';
import { boxShadow } from 'styles/common';

export const UserTileWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
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
    padding: 5px;
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