import React, { PureComponent } from 'react';
import Head from 'next/head';
import { 
  MainLayoutWrapperStyled,
  MainContentWrapperStyled,
 } from './MainLayout.styles';
 import TopNavbar from '../topNavBar';
 import Footer from '../footer';

class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return [
      <Head />,
      <MainLayoutWrapperStyled>
        <TopNavbar />
        <MainContentWrapperStyled>
          {children}
        </MainContentWrapperStyled>
        <Footer />
      </MainLayoutWrapperStyled>
    ];
  }
}

export default MainLayout;
