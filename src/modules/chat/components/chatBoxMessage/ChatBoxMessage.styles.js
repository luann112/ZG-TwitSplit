import styled, { css } from 'styled-components';

export const ChatBoxMessageWrapperStyled = styled.div`
  display: flex;
  margin: 5px 0;
  width: 100%;
  ${props => !props.isIncoming && css`
    flex-direction: row-reverse;
  `}
`;

export const MessageStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  max-width: 70%;
  line-height: 1.3em;
  padding: 5px 10px;
  background: rgb(207,234,247);
  color: rgba(0,0,0,.87);
  border-radius: 10px;
  ${props => props.isIncoming && css`
    background: #eaedf0;
  `}
`;