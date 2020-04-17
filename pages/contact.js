import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Form, Icon, Input, Button } from 'antd';

class Contact extends Component {
  render() {
    console.log('Contact', this.props)
    const { companyInfo = {} } = this.props;
    const { name, office_address, link_google_map, phone, email } = companyInfo;

    return (
      <div>
        <div className="contact_page">
          <div className="contact_page__company_info">
            <p className="contact_page__company_info__name">{name}</p>
            <p>{office_address}</p>
            <p>
              <span>Tel:</span>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <span>Email:</span>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <h3 className="contact_page__title">Đừng ngần ngại liên lạc với chúng tôi nếu bạn có những yêu cầu riêng</h3>
          <Row gutter={{ md: 30 }}>
            <Col xs={24} md={12} className="contact_page__map_area">
              <iframe
                src={link_google_map}
                frameBorder="0"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </Col>
            <Col xs={24} md={12} className="contact_page__form">
              <h3 className="contact_page__title">Đừng ngần ngại liên lạc với chúng tôi nếu bạn có những yêu cầu riêng</h3>
              <Form>
                <Form.Item>
                  <Input
                    type="text"
                    placeholder="Họ và tên"
                  />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                  <Form.Item>
                    <Input
                      type="phone"
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <Input.TextArea
                    rows={5}
                    placeholder="Nội dung"
                  />
                </Form.Item>
                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Gửi tin nhắn
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;