import React, { Component } from 'react';
import Icon from 'src/components/icon'
import {
  SearchBoxWrapperStyled,
  SearchIconStyled,
  SearchInputStyled,
  ClearInputButtonStyled,
} from './SearchBox.styles';

class SearchBox extends Component {
  render() {
    return (
      <SearchBoxWrapperStyled>
        <SearchIconStyled>
          <Icon type="search" />
        </SearchIconStyled>
        <SearchInputStyled 
          type="text"
          placeholder="Search user name"
        />
        <ClearInputButtonStyled>
          <Icon type="times" />
        </ClearInputButtonStyled>
      </SearchBoxWrapperStyled>
    );
  }
}

export default SearchBox;