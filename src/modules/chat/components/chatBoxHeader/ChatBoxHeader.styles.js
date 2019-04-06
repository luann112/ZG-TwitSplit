import styled from 'styled-components';

export const ChatBoxHeaderWrapperStyled = styled.div`
  height: 72px;
`;

export const ChatBoxHeaderInnerWrapperStyled = styled.div`
  height: 68px;
  padding: 0 20px;
  /* box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.14); */
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
`;

export const UserNameStyled = styled.div`
  flex: 1;
  margin: 0 30px;
  color: rgba(0,0,0,.54);
  font-weight: bold;
`;