import styled from 'styled-components';

export const ChatBoxContentWrapperStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: auto;
  padding: 10px;
`;

export const ErrorStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  line-height: 1.3em;
  padding: 5px 10px;
  background: rgba(217, 30, 24, .69);
  color: #fff;
  border-radius: 10px;
`;