import styled from 'styled-components';

export const ChatBoxHeaderWrapperStyled = styled.div`
  height: 72px;
`;

export const ChatBoxHeaderInnerWrapperStyled = styled.div`
  height: 68px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #cbcbcb;
`;

export const UserNameStyled = styled.div`
  flex: 1;
  margin: 0 30px;
  color: rgba(0,0,0,.54);
  font-weight: bold;
`;

export const ActionsStyled = styled.div`
  display: flex;
`;

export const IconWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 1.6em;
    color: rgba(0,0,0,.54);
    transition: all 200ms ease;
  }
  &:hover {
    i {
      color: rgba(0,0,0,.87);
      font-size: 2em;
    }
  }
  padding: 5px 10px;
`;