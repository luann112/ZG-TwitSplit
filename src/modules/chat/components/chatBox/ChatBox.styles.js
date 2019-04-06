import styled from 'styled-components';
import { boxShadow } from 'styles/common';
import { slideToLeft } from 'styles/animation';

export const ChatBoxWrapperStyled = styled.div`
  width: 50%;
  height: 70%;
  box-shadow: ${boxShadow};
  padding: 0px 0px 1em;
  background: rgb(255, 255, 255);
  border-radius: 0.3em;
  animation: ${slideToLeft} 1s ease;
  display: flex;
  flex-direction: column;
`;