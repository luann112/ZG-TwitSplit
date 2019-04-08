import styled, { css } from 'styled-components';

export const AvatarWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  img {
    width: 6em;
    height: 6em;
    border-radius: 50%;
    object-fit: contain;
  }
  ${props => props.size === 'xsmall' && css`
    width: 2.5em;
    height: 2.5em;
    border: 1px solid lightblue;

    img {
      width: 2.5em;
      height: 2.5em;
    }
  `}
  ${props => props.size === 'small' && css`
    width: 3.1em;
    height: 3.1em;
    border: 2px solid lightblue;

    img {
      width: 3em;
      height: 3em;
    }
  `}
  ${props => props.size === 'mini' && css`
    width: 1.7em;
    height: 1.7em;
    border: 1px solid lightblue;

    img {
      width: 1.7em;
      height: 1.7em;
    }
  `}
`;