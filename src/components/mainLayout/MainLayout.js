import React, { PureComponent } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { 
  MainLayoutWrapperStyled,
  MainContentWrapperStyled,
 } from './MainLayout.styles';


class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return [
      <Head />,
      <MainLayoutWrapperStyled>
        <MainContentWrapperStyled>
          {children}
        </MainContentWrapperStyled>
      </MainLayoutWrapperStyled>
    ];
  }
}

export default connect(state => state)(MainLayout);
