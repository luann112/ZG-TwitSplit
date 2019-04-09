import React, { Component } from 'react';
import Icon from 'src/components/icon'
import {
  SearchBoxWrapperStyled,
  SearchIconStyled,
  SearchInputStyled,
  ClearInputButtonStyled,
} from './SearchBox.styles';

class SearchBox extends Component {
  state = { keyword: '' }

  updateKeyword = () => {
    const { updateKeyword } = this.props;
    const { keyword } = this.state;
    updateKeyword(keyword);
  }

  onChange = (e) => {
    const keyword = e.target.value;
    this.setState({ keyword });
    if (this.timeOutHandler) {
      clearTimeout(this.timeOutHandler);
    }
    this.timeOutHandler = setTimeout(this.updateKeyword, 300);
  }

  clearKeyword = () => {
    this.setState({ keyword: '' })
  }
  render() {
    const { keyword } = this.state;
    return (
      <SearchBoxWrapperStyled>
        <SearchIconStyled>
          <Icon type="search" />
        </SearchIconStyled>
        <SearchInputStyled 
          type="text"
          placeholder="Search user name"
          value={keyword}
          onChange={this.onChange}
        />
        {
          !!keyword.length && (
            <ClearInputButtonStyled onClick={this.clearKeyword}>
              <Icon type="times" />
            </ClearInputButtonStyled>
          )
        }
      </SearchBoxWrapperStyled>
    );
  }
}

export default SearchBox;