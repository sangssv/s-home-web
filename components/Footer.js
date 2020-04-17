import React, { Component } from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import fetcher from '../helpers/fetcher';

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
          <Col md={16}>
            <h2 className="main-title text-white">{name}</h2>
            <p>
              <span>Địa chỉ VP:</span>
              <span style={{ width: 'auto' }}>{office_address}</span>
            </p>
            <p>
              <span>Xưởng sản xuất:</span>
              <span style={{ width: 'auto' }}>{factory_address}</span>
            </p>
            <p>
              <span>Tel:</span>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <span>Email:</span>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </Col>
          <Col md={8} className="follow">
            <h2 className="main-title text-white">Follow us</h2>
            <div className="follow__social">
              <a href="https://www.facebook.com/noithatgold">
                <Icon className="follow__social__icon" type="facebook" theme="filled" />
              </a>
              <a href="https://www.facebook.com/noithatgold">
                <Icon className="follow__social__icon" type="twitter" />
              </a>
              <a href="https://www.facebook.com/noithatgold">
                <Icon className="follow__social__icon" type="instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Layout.Footer>
    );
  }
};

export default Footer;