import React from 'react';
import { Layout, Row, Col, Icon } from 'antd';

const Footer = () => (
  <Layout.Footer className="footer">
    <Row>
      <Col span="16">
        <h2 className="main-title text-white">Công Ty Cổ Phần Thiết Kế Nội Thất Gold</h2>
        <p>330 Ung Văn Khiêm, phường 25, quận Bình Thạnh, TP.HCM</p>
        <p>
          <span>Tel:</span>
          <a href="tel:0981346304">0981 346 304</a>
        </p>
        <p>
          <span>Email:</span>
          <a href="mailto:noithatgold@gmail.com">noithatgold@gmail.com</a>
        </p>
      </Col>
      <Col span="8" className="follow">
        <h2 className="main-title text-white">Follow us</h2>
        <div className="follow__social">
          <a href="https://www.facebook.com/noithatgold">
            <Icon className="follow__social__icon" type="facebook" />
            <Icon className="follow__social__icon" type="twitter" />
            <Icon className="follow__social__icon" type="instagram" />
          </a>
        </div>
      </Col>
    </Row>
  </Layout.Footer>
);

export default Footer;