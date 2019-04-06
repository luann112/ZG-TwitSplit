import styled from 'styled-components';
import { boxShadow } from 'styles/common';
import { slideToRight } from 'styles/animation';

export const UserBoxWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 70%;
  box-shadow: ${boxShadow};
  padding: 0px 0px 1em;
  background: rgb(255, 255, 255);
  border-radius: 0.3em;
  animation: ${slideToRight} 1s ease;
`;