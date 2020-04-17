import React, { Component } from 'react';
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SEOMeta from './SEOMeta';
import { Layout, Menu, Breadcrumb } from 'antd';
import "../styles/styles.scss";

const AppLayout = (props) => {
  return (
    <>
      <SEOMeta />
      <Layout className="layout">
        <Header {...props} />
        <Content {...props}>
          {props.children}
        </Content>
        <Footer {...props} />
      </Layout>
    </>
  );
}

export default AppLayout;