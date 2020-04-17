import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Row, Col, Menu } from 'antd';
import { Layout } from 'antd';

const Content = ({ children, ...otherProps }) => {
  return (
    <Layout.Content className="content">
      {React.cloneElement(children, { ...otherProps })}
    </Layout.Content>
  );
}

export default Content;