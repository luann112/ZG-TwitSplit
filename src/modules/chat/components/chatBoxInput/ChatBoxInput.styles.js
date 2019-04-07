import styled from 'styled-components';

export const ChatBoxInputWrapperStyled = styled.div`
  min-height: 3em;
  max-height: 7em;
  display: flex;
  align-items: center;
  border-top: 2px solid #cbcbcb;
  padding: 10px;
`;

export const InputMessageStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  input {
    height: 2em;
    outline: none;
    width: 97%;
    border: 2px solid #cbcbcb;
    padding: 5px 10px;
    border-radius: 5px;
    color: rgba(0,0,0,.87);
  }
`;

export const SendIconBtnStyled = styled.div`
  display: flex;
  flex: 0 0 2.5em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 1.8em;
    color: rgba(0,0,0,.54);
    transition: all 200ms ease;
    transform: rotate(-20deg); 
  }
  &:hover {
    i {
      color: rgba(0,0,0,.87);
      font-size: 2.2em;
    }
  }
  padding: 5px 10px;
`;