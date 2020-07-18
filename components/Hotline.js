import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Row, Col, Menu } from 'antd';
import { Layout } from 'antd';

const phoneFormat = phone => {
  var cleaned = ('' + phone).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{4})(\d{3})(\d{3})((\d))$/)
  if (match) {
    return match[1] + ' ' + match[2] + ' ' + match[3] + ' ' + match[4];
  }
  return null
}

const Hotline = (props) => {
  const { companyInfo: { hotline = '' } = {} } = props;

  if (!hotline) return null;

  return (
    <a href={`tel:+${hotline}`} className="hotline">
      <div className="hotline__icon-container">
        <img className="hotline__icon" src="/images/hotline-icon.png" />
      </div>
      <div className="hotline__content">
        <span className="hotline__phone">{phoneFormat(hotline)}</span>
      </div>
    </a>
  );
}

export default Hotline;