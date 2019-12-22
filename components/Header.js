import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { Button } from 'antd';

const Header = () => (
  <Layout.Header className="header">
    <div className="logo">
      <a href="#">
        <img src="/images/logo.png" />
      </a>
    </div>
    <Menu mode="horizontal">
      <Menu.Item key="1">Trang chủ</Menu.Item>
      <Menu.Item key="2">Giới thiệu</Menu.Item>
      <Menu.Item key="3">Sản phẩm</Menu.Item>
      <Menu.Item key="4">Dự án</Menu.Item>
      <Menu.Item key="5">Tin tức</Menu.Item>
      <Menu.Item key="6">Liên hệ</Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;