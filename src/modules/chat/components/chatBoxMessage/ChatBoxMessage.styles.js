import styled, { css } from 'styled-components';
import { slideToTop } from 'styles/animation';

export const ChatBoxMessageWrapperStyled = styled.div`
  display: flex;
  margin: 5px 0;
  width: 100%;
  ${props => !props.isIncoming && css`
    flex-direction: row-reverse;
  `}
  animation: ${slideToTop};
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
  ${props => props.isError && css`
    background: rgba(217, 30, 24, .69);
    color: #fff;
  `}
`;

export const CommonWrapperStyled = styled.div`
  visibility: hidden;
  ${props => props.isVisible && css`
    visibility: visible;
  `}
`;