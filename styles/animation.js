import { keyframes } from 'styled-components';

export const slideToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(5em);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideToRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-5em);  
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
