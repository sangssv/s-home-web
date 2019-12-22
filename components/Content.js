import React from 'react';
import { Layout } from 'antd';

const Content = ({ children }) => (
  <Layout.Content className="content">
    {children}
  </Layout.Content>
);

export default Content;