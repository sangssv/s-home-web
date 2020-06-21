import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Modal } from 'antd';
import ContactForm from './ContactForm';
import fetcher from '../helpers/fetcher';

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Row justify="center" type="flex">
          <Col xs={24} md={12}>
            <div className="contact">
              <h2 className="main-title">Tư vấn - Báo giá</h2>
              <p className="description">Xin điền vào bảng thông tin dưới đây nếu bạn có vấn đề liên quan đến sản phẩm hay dịch vụ của chúng tôi. Cảm ơn bạn đã chia sẻ ý kiến!</p>

              <ContactForm />
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
};

export default Contact;