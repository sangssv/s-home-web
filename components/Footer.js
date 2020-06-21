import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import fetcher from '../helpers/fetcher';
import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
} from '@ant-design/icons';

class Footer extends Component {
  render() {
    const { companyInfo } = this.props;

    if (!companyInfo) {
      return null;
    }

    const { name, office_address, factory_address, phone, email } = companyInfo;

    return (
      <Layout.Footer className="footer">
        <Row>
          <Col xs={24} md={16} className="info">
            <h2 className="main-title text-white">{name}</h2>
            <p>
              <span className="footer__label">Địa chỉ VP:</span>
              <span style={{ width: 'auto' }}>{office_address}</span>
            </p>
            <p>
              <span className="footer__label">Xưởng sản xuất:</span>
              <span style={{ width: 'auto' }}>{factory_address}</span>
            </p>
            <p>
              <span className="footer__label">Tel:</span>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <span className="footer__label">Email:</span>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </Col>
          <Col xs={24} md={8} className="follow">
            <h2 className="main-title text-white">Follow us</h2>
            <div className="follow__social">
              <a href="https://www.facebook.com/noithatgold">
                <FacebookFilled className="follow__social__icon" />
              </a>
              <a href="https://www.facebook.com/noithatgold">
                <YoutubeFilled className="follow__social__icon" />
              </a>
              <a href="https://www.facebook.com/noithatgold">
                <InstagramFilled className="follow__social__icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Layout.Footer>
    );
  }
};

export default Footer;