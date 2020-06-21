import React, { useEffect } from 'react';
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Copyright from './Copyright';
import Hotline from './Hotline';
import SEOMeta from './SEOMeta';
import Popup from './Popup';
import { Layout, Menu, Breadcrumb } from 'antd';
import { fb } from '../helpers/fb';
import "../styles/styles.scss";

const AppLayout = (props) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      fb(FB => timeout && FB.XFBML.parse());
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      <SEOMeta />
      <Layout className="layout">
        <Header {...props} />
        <Content {...props}>
          {props.children}
        </Content>
        <Footer {...props} />
        <Copyright />
        <Popup {...props} />
        <Hotline />
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="2310434352536454"
          theme_color="#0084ff"
          logged_in_greeting="Xin chào! S-Home có thể giúp gì cho bạn."
          logged_out_greeting="Xin chào! S-Home có thể giúp gì cho bạn."
        />
      </Layout>
    </>
  );
}

export default AppLayout;