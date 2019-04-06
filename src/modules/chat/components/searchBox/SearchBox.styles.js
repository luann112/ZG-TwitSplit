import styled from 'styled-components';

export const SearchBoxWrapperStyled = styled.div`
  display: flex;
  padding: 5px 10px;
  height: 58px;
  background-color: #fafafa;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-items: center;
`;

export const SearchIconStyled = styled.div`
  padding: 0 5px;
  i {
    color: rgba(0,0,0,.54);
    font-size: 24px;
  }
`;
export const SearchInputStyled = styled.input`
  flex: 1;
  background-color: #fafafa;
  font-weight: 400;
  line-height: 16px;
  vertical-align: super;
  border: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  outline: none;
  margin-left: 4px;
  color: rgba(0,0,0,.87);
  font-size: 16px;
  ::placeholder {
    opacity: 0.5;
  }
`;
export const ClearInputButtonStyled = styled.div`
  padding: 0 5px;
  cursor: pointer;
  i {
    color: rgba(0,0,0,.54);
    font-size: 24px;
  }
`;