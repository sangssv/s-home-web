import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Row, Col, Menu } from 'antd';
import { Layout } from 'antd';

const Hotline = () => {
  return (
    <a href="tel:+84981346304" className="hotline">
      <div className="hotline__icon-container">
        <img className="hotline__icon" src="/images/hotline-icon.png" />
      </div>
      <div className="hotline__content">
        <span className="hotline__phone">0981 346 304</span>
      </div>
    </a>
  );
}

export default Hotline;