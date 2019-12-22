import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Layout, Menu, Breadcrumb } from 'antd';
import "../styles/styles.scss";

const withLayout = Page => {
  return () => (
    <Layout className="layout">
      <Header />
      <Content>
        <Page />
      </Content>
      <Footer />
    </Layout>
  );
};

export default withLayout;